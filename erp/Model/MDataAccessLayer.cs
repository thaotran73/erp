using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class MDataAccessLayer
    {
        string keyEncrypt = "Tran Huynh Thai Encrypt for THAITHAO";
        string connectionString = "Data Source = 172.16.254.19;Initial Catalog=erpdb;User ID=sa;Password=abcd1234;Max Pool Size=200;Min Pool Size=20;Connect Timeout=30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public int status = 0;

        public int errNumber = 0;
        public String errDescription = "";

        public SqlConnection sqlConnection;
        public SqlTransaction sqlTransaction;

        int buffSizeRecordMax = 50;
        int buffSizeRecord = 0;
        string sqlQueryBuff = "";
        string sqlQueryHeadBuff = "";
        string sqlQueryFootBuff = "";

        public DataSet oDataSet;
        public DataTable oDataTable;

        public DataTable oDBError;
        public DataTable oListEvent;
        public DataTable oListParam;

        public int connectionEstablish()
        {
            try
            {
                sqlConnection = new SqlConnection(connectionString);
                sqlConnection.Open();
                initDBError();
            }
            catch (Exception ex)
            {
                errNumber = 1;
                errDescription = "MDataAccessLayer! " + ex.Message;
                status = 1;
            }
            return status;
        }

        public int connectionClose()
        {
            status = 0;
            try
            {
                sqlConnection.Close();
            }
            catch (Exception ex)
            {
                status = 1;
                errNumber = 1;
                errDescription = "Không thể hiện việc ngắt kết nối đến database ! " + ex.Message;
            }

            return status;
        }

        public Dictionary<string, object> initReturnData()
        {
            Dictionary<string, object> error = new Dictionary<string, object>();
            error.Add("skin", "toast");
            error.Add("type", "info");
            error.Add("number", 0);
            error.Add("message", "");

            Dictionary<string, object> ret = new Dictionary<string, object>();
            ret.Add("data", null);
            ret.Add("error", error);

            return ret;
        }
        public Dictionary<string, object> setReturnData(Dictionary<string, object> ret, string skin, string type, int number, string message)
        {
            Dictionary<string, object> error = new Dictionary<string, object>();
            error.Add("skin", skin);
            error.Add("type", type);
            error.Add("number", number);
            error.Add("message", message);

            ret["error"] = error;

            return ret;
        }

        public Dictionary<string, object> parseDictionaryObject(JObject jsonValue)
        {
            Dictionary<string, object> ret = new Dictionary<string, object>();

            foreach (JProperty property in jsonValue.Properties())
            {
                Type propertyType = property.Value.GetType();
                if (propertyType.Name == "JObject")
                {
                    ret.Add(property.Name, parseDictionaryObject((JObject)property.Value));
                }
                else if (propertyType.Name == "JArray")
                {
                    ret.Add(property.Name, parseDictionaryArray((JArray)property.Value));
                }
                else
                {
                    ret.Add(property.Name, property.Value);
                }
            }
            return ret;
        }

        public Dictionary<string, object> parseDictionaryArray(JArray jsonValue)
        {
            Dictionary<string, object> ret = new Dictionary<string, object>();
            int iKey = 0;

            foreach (Object iTem in jsonValue) {
                Type propertyType = iTem.GetType();
                if (propertyType.Name == "JObject")
                {
                    ret.Add(iKey.ToString("0000000000"), parseDictionaryObject((JObject)iTem));
                }
                else if (propertyType.Name == "JArray")
                {
                    ret.Add(iKey.ToString("0000000000"), parseDictionaryArray((JArray)iTem));
                }
                else
                {
                    ret.Add(iKey.ToString("0000000000"), iTem);
                }
                iKey = iKey + 1;
            }
            return ret;
        }

        public string Encrypt(string toEncrypt, bool useHashing)
        {
            byte[] keyArray;
            byte[] toEncryptArray = UTF8Encoding.UTF8.GetBytes(toEncrypt);

            // Get the key from config file
            // Syed Moshiur Murshed
            if (useHashing)
            {
                MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(keyEncrypt));
                hashmd5.Clear();
            }
            else
                keyArray = UTF8Encoding.UTF8.GetBytes(keyEncrypt);

            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateEncryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);
            tdes.Clear();
            return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        }

        public string Decrypt(string cipherString, bool useHashing)
        {
            byte[] keyArray;
            byte[] toEncryptArray = Convert.FromBase64String(cipherString);

            //Get your key from config file to open the lock!

            if (useHashing)
            {
                MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(keyEncrypt));
                hashmd5.Clear();
            }
            else
                keyArray = UTF8Encoding.UTF8.GetBytes(keyEncrypt);

            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateDecryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(toEncryptArray, 0, toEncryptArray.Length);

            tdes.Clear();
            return UTF8Encoding.UTF8.GetString(resultArray);
        }

        public string hashMD5(string inputString)
        {
            UnicodeEncoding UE = new UnicodeEncoding();
            byte[] hashValue;
            byte[] message = UE.GetBytes(inputString);

            MD5 hasher = new MD5CryptoServiceProvider();
            string hex = "";

            hashValue = hasher.ComputeHash(message);
            foreach (byte x in hashValue)
            {
                hex += String.Format("{0:x2}", x);
            }

            return hex.ToLower();
        }

        //To execute event from screen on database server
        public int exeEvent(String executeCMD, Dictionary<string, object> listParam, int iCommandTimeout = 1200)
        {
            try
            {
                JValue param;
                SqlCommand sqlCommand = new SqlCommand(executeCMD, sqlConnection);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                if (getListParam(executeCMD) == 0)
                {
                    foreach (DataRow row in oListParam.Rows)
                    {
                        String paramName = row["name"].ToString();
                        param = (JValue) null;
                        if (listParam.ContainsKey(paramName.Replace("@", string.Empty)))
                        {
                            param = (JValue)listParam[paramName.Replace("@", string.Empty)];
                            if (param.Value != null)
                                switch (row["parameter_type"].ToString().ToLower())
                                {
                                    case "date":
                                        sqlCommand.Parameters.AddWithValue(paramName, ((DateTime) param.Value).ToString("yyyy/MM/dd"));
                                        break;
                                    case "datetime":
                                        sqlCommand.Parameters.AddWithValue(paramName, ((DateTime)param.Value).ToString("yyyy/MM/dd HH:mm:ss"));
                                        break;
                                    default:
                                        sqlCommand.Parameters.AddWithValue(paramName, param.Value.ToString());
                                        break;
                                }
                        }
                        if (param.Value == null)
                           sqlCommand.Parameters.AddWithValue(paramName, DBNull.Value);
                    }
                }

                sqlCommand.CommandTimeout = iCommandTimeout;
                sqlTransaction = sqlConnection.BeginTransaction();
                sqlCommand.Transaction = sqlTransaction;

                SqlDataAdapter oDataAdapter = new SqlDataAdapter(sqlCommand);
                oDataTable = new DataTable();
                oDataTable.Clear();
                oDataAdapter.Fill(oDataTable);
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                if (sqlTransaction.Connection != null)
                    sqlTransaction.Rollback();
                errNumber = 1;
                errDescription = "exeEvent! " + ex.Message;
                status = 1;
            }
            return status;
        }

        public int connectExecuteNonQuery(string sqlQuery, int iCommandTimeout = 1200)
        {
            int rowsAffected;
            SqlCommand sqlCommand = new SqlCommand();

            sqlCommand.CommandText = sqlQuery;
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;
            sqlTransaction = sqlConnection.BeginTransaction();
            sqlCommand.Transaction = sqlTransaction;

            try
            {
                rowsAffected = sqlCommand.ExecuteNonQuery();
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                sqlTransaction.Rollback();
                errNumber = 1;
                errDescription = "connectExecuteNonQuery!" + ex.Message;
                status = 1;
            }

            return status;
        }

        public int connectExecuteReader(string sqlQuery, int iCommandTimeout = 1200)
        {
            SqlCommand sqlCommand = new SqlCommand();

            sqlCommand.CommandText = sqlQuery;
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;
            sqlTransaction = sqlConnection.BeginTransaction();
            sqlCommand.Transaction = sqlTransaction;

            SqlDataAdapter oDataAdapter = new SqlDataAdapter(sqlCommand);
            oDataSet = new DataSet();
            oDataSet.Tables.Clear();
            try
            {
                oDataAdapter.Fill(oDataSet);
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                sqlTransaction.Rollback();
                status = 1;
                errNumber = 1;
                errDescription = "connectExecuteReader! " + ex.Message;
            }
            return status;
        }

        public int connectExecuteDataTable(string sqlQuery, int iCommandTimeout = 1200)
        {
            SqlCommand sqlCommand = new SqlCommand();

            sqlCommand.CommandText = sqlQuery;
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;
            sqlTransaction = sqlConnection.BeginTransaction();
            sqlCommand.Transaction = sqlTransaction;

            SqlDataAdapter oDataAdapter = new SqlDataAdapter(sqlCommand);
            oDataTable = new DataTable();
            oDataTable.Clear();
            try
            {
                oDataAdapter.Fill(oDataTable);
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                sqlTransaction.Rollback();
                status = 1;
                errNumber = 1;
                errDescription = "connectExecuteDataTable! " + ex.Message;
            }
            return status;
        }

        public int connectExecuteCount(string sqlQuery, int iCommandTimeout = 1200)
        {
            SqlCommand sqlCommand = new SqlCommand();

            sqlCommand.CommandText = sqlQuery;
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;
            sqlTransaction = sqlConnection.BeginTransaction();
            sqlCommand.Transaction = sqlTransaction;

            SqlDataAdapter oDataAdapter = new SqlDataAdapter(sqlCommand);
            oDataTable = new DataTable();
            oDataTable.Clear();
            try
            {
                oDataAdapter.Fill(oDataTable);
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                sqlTransaction.Rollback();
                status = 1;
                errNumber = 1;
                errDescription = "connectExecuteCount! " + ex.Message;
            }
            return status;
        }

        public string connectExecuteFieldName(string sqlQuery, int iCommandTimeout = 1200)
        {
            SqlCommand sqlCommand = new SqlCommand();

            sqlCommand.CommandText = sqlQuery;
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;
            sqlTransaction = sqlConnection.BeginTransaction();
            sqlCommand.Transaction = sqlTransaction;

            SqlDataAdapter oDataAdapter = new SqlDataAdapter(sqlCommand);
            oDataTable = new DataTable();
            oDataTable.Clear();
            try
            {
                oDataAdapter.Fill(oDataTable);
                sqlTransaction.Commit();
                sqlCommand.Parameters.Clear();
            }
            catch (Exception ex)
            {
                sqlTransaction.Rollback();
                status = 1;
                errNumber = 1;
                errDescription = "connectExecuteFieldName! " + ex.Message;
                return "";
            }
            if (oDataTable.Rows.Count > 0)
                return oDataTable.Rows[0][0].ToString();
            else
                return "";
        }

        public int setStartSqlQueryBuff(string sqlQuery)
        {
            status = 0;
            sqlQueryHeadBuff = sqlQuery.Trim();
            sqlQueryBuff = "";
            buffSizeRecord = 0;
            return status;
        }

        public int setSqlQueryBuff(string sqlQuery, string sOperator)
        {
            status = 0;
            if (sqlQueryBuff == "")
                sqlQueryBuff = sqlQuery.Trim();
            else
                sqlQueryBuff = sqlQueryBuff + sOperator + sqlQuery.Trim();
            buffSizeRecord = buffSizeRecord + 1;
            if (buffSizeRecord > buffSizeRecordMax)
                status = stopSqlQueryBuff("");
            return status;
        }

        public int setStopSqlQueryBuff(string sqlQuery)
        {
            status = 0;
            sqlQueryFootBuff = sqlQuery.Trim();
            return status;
        }

        public int stopSqlQueryBuff(string sqlQuery)
        {
            status = 0;
            if (buffSizeRecord > 0)
                status = connectExecuteNonQuery(sqlQueryHeadBuff + " " + sqlQueryBuff + " " + sqlQuery.Trim());
            sqlQueryBuff = "";
            buffSizeRecord = 0;
            return status;
        }
        public int getListEvent(string eventID) {
            status = 0;
            string sSQLQuery = @"SELECT * FROM SYS_Binds WHERE eventID = '" + eventID + "' ORDER BY orderBinds ASC";
            if (connectExecuteDataTable(sSQLQuery) == 0)
            {
                oListEvent = oDataTable;
                if (oDataTable.Rows.Count == 0)
                    status = 1;
            }
            else
                status = 1;
            return status;
        }
        public void initDBError()
        {
            status = 0;
            string sSQLQuery = @"CREATE TABLE #ERROR ([id] bigint IDENTITY(1,1) NOT NULL, [skin] nvarchar(50), [type] nvarchar(50), [number] int, [message] nvarchar(255))";
            connectExecuteNonQuery(sSQLQuery);
        }

        public int getDBError()
        {
            status = 0;
            string sSQLQuery = @"SELECT * FROM #ERROR ORDER BY id DESC";
            if (connectExecuteDataTable(sSQLQuery) == 0)
            {
                oDBError = oDataTable;
                if (oDataTable.Rows.Count == 0)
                    status = 1;
            }
            else
                status = 1;
            return status;
        }

        public int getListParam(string functionName)
        {
            status = 0;
            string sSQLQuery = @"SELECT name, type_name(user_type_id) AS parameter_type, parameter_id FROM sys.parameters WHERE object_id = object_id('dbo." + functionName + "')";
            if (connectExecuteDataTable(sSQLQuery) == 0)
                oListParam = oDataTable;
            else
                status = 1;
            return status;
        }

        public int getListColumn(string tableName)
        {
            status = 0;
            string sSQLQuery = @"SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '" + tableName + "'";
            connectExecuteDataTable(sSQLQuery);
            return status;
        }
        public int insertList2Table(string tableName, Dictionary<string, object> recList, int iCommandTimeout = 1200)
        {
            DataTable oListColumn = new DataTable();

            Dictionary<string, object> dataList = new Dictionary<string, object>();
            Dictionary<string, object> keyList = new Dictionary<string, object>();

            if (recList.ContainsKey("data"))
                dataList = (Dictionary<string, object>) recList["data"];
            else
                dataList = recList;

            if (recList.ContainsKey("keys"))
                dataList = (Dictionary<string, object>)recList["keys"];

            SqlCommand sqlCommand = new SqlCommand();
            sqlCommand.CommandType = CommandType.Text;
            sqlCommand.Connection = sqlConnection;
            sqlCommand.CommandTimeout = iCommandTimeout;

            if (getListColumn(tableName) == 0)
                oListColumn = oDataTable;

            if (oListColumn.Rows.Count > 0)
                foreach (DataRow rowData in oListColumn.Rows)
                {
                    if (dataList.ContainsKey((string) rowData["column_name"]))
                    {

                    }
                }
            else
                foreach (string itemRowKey in dataList.Keys)
                {
                    foreach (string itemKey in ((Dictionary<string, object>)dataList[itemRowKey]).Keys)
                    {
                        sqlQHeader = sqlQHeader + itemKey
                        sqlQData = sqlQData
                    }
                }
            /*

                                int rowsAffected;
                        SqlCommand sqlCommand = new SqlCommand();

                        sqlCommand.CommandText = sqlQuery;
                        sqlCommand.CommandType = CommandType.Text;
                        sqlCommand.Connection = sqlConnection;
                        sqlCommand.CommandTimeout = iCommandTimeout;

                        foreach (Object item in recList)
                        {
                            if (iCounter == 0)
                            {
                                cmd.BeginTransaction;
                            }
                            string sql = @"INSERT INTO Mytable (id, name, salary) values ('@id', '@name', '@salary')";
                            //add parameters
                            cmd.CommandText = sql;
                            cmd.ExecuteNonQuery();
                            iCounter++;
                            if (iCounter >= 500)
                            {
                                cmd.CommitTransaction;
                                iCounter = 0;
                            }
                        }

                        if (iCounter > 0)
                            cmd.CommitTransaction;


                        sqlTransaction = sqlConnection.BeginTransaction();
                        sqlCommand.Transaction = sqlTransaction;

                        try
                        {
                            rowsAffected = sqlCommand.ExecuteNonQuery();
                            sqlTransaction.Commit();
                            sqlCommand.Parameters.Clear();
                        }
                        catch (Exception ex)
                        {
                            sqlTransaction.Rollback();
                            errNumber = 1;
                            errDescription = "connectExecuteNonQuery!" + ex.Message;
                            status = 1;
                        }
                        */
            return status;
        }
    }
}

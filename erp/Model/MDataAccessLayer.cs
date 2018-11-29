using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public class MDataAccessLayer
    {
        string connectionString = "Data Source = localhost;Initial Catalog=erpdb;User ID=sa;Password=abcd1234;Max Pool Size=200;Min Pool Size=20;Connect Timeout=30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public int status = 0;

        public int errNumber = -1;
        public string errDescription = "";

        public SqlConnection sqlConnection;
        public SqlTransaction sqlTransaction;

        int buffSizeRecordMax = 50;
        int buffSizeRecord = 0;
        string sqlQueryBuff = "";
        string sqlQueryHeadBuff = "";
        string sqlQueryFootBuff = "";

        public DataSet oDataSet;
        public DataTable oDataTable;

        public MDataAccessLayer()
        {
            try
            {
                sqlConnection = new SqlConnection(connectionString);
                sqlConnection.Open();
            }
            catch (Exception ex)
            {
                errNumber = 1;
                errDescription = "MDataAccessLayer! " + ex.Message;
                status = 1;
            }
        }
        public Dictionary<string, object> parseDictionary(JObject jsonValue)
        {
            Dictionary<string, object> ret = new Dictionary<string, object>();

            foreach (JProperty property in jsonValue.Properties())
            {
                Type propertyType = property.Value.GetType();
                if (propertyType.Name == "JObject")
                {
                    ret.Add(property.Name, parseDictionary((JObject)property.Value));
                }
                else
                {
                    ret.Add(property.Name, property.Value);
                }
            }
            return ret;
        }

        //To execute event from screen on database server
        public int exeEvent(String eventID, String jsonInput, int typeMessage, int typeAction)
        {
            try
            {
                SqlCommand cmd = new SqlCommand("spGetAllEmployees", sqlConnection);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader rdr = cmd.ExecuteReader();
            }
            catch (Exception ex)
            {
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
    }
}

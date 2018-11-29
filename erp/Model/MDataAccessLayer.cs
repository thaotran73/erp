using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.Models
{
    public static class MDataAccessLayer
    {
        string static connectionString = "Data Source = localhost;Initial Catalog=erpdb;User ID=sa;Password=abcd1234;Max Pool Size=200;Min Pool Size=20;Connect Timeout=30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        public static int errNumber = -1;
        public static string errDescription = "";
        static SqlConnection connDB;

        public MDataAccessLayer()
        {
            try
            {
                connDB = new SqlConnection(connectionString);
                connDB.Open();
            }
            catch (Exception ex)
            {
                errNumber = 1;
                errDescription = "Connect DB! " + ex.Message;
            }
        }
        public Dictionary<string, object> static parseDictionary(JObject jsonValue)
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
                SqlCommand cmd = new SqlCommand("spGetAllEmployees", connDB);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader rdr = cmd.ExecuteReader();
            }
            catch (Exception ex)
            {
                errNumber = 1;
                errDescription = "Execute StoredProcedure! " + ex.Message;
            }
            return 0;
        }
    }
}

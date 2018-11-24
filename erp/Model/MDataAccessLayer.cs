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
        //string connectionString = "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=erp;Max Pool Size=200;Min Pool Size=20;Data Source=(localhost);";
        string connectionString = "Data Source = localhost;Initial Catalog=erpdb;User ID=sa;Password=abcd1234;Max Pool Size=200;Min Pool Size=20;Connect Timeout=30; Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

        //To execute event from screen on database server
        public int executeEvent(String eventID, String jsonInput, int typeMessage, int typeAction)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllEmployees", con);
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();

                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}

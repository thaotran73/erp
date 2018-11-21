using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using ERP.Models;

namespace ERP.Controllers
{
    public class DataController : Controller
    {
        DataAccessLayer  = new DataAccessLayer();

        [HttpPost]
        [Route("api/executeEvent")]
        public int executeEvent([FromBody])
        {
            return true;
        }
    }
}

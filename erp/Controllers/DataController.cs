using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using ERP.Models;
using Newtonsoft;

namespace ERP.Controllers
{
    public class DataController : Controller
    {
        MDataAccessLayer oDataAccessLayer = new MDataAccessLayer();

        [HttpPost]
        [Route("api/executeEvent")]
        public int executeEvent([FromBody] Object eventData)
        {
            return 1;
        }
    }
}

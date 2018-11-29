using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using ERP.Models;
using Newtonsoft;
using System.Reflection;
using Newtonsoft.Json.Linq;

namespace ERP.Controllers
{
    public class DataController : Controller
    {
        MDataAccessLayer oDataAccessLayer = new MDataAccessLayer();

        [HttpPost]
        [Route("api/exeEvent")]
        public Object exeEvent([FromBody] Object eventData)
        {
            Object retData;
            Dictionary<string, object> eventDataDictionary;

            Type eventDataType = eventData.GetType();
            if (eventDataType.Name == "JObject")
            {
                eventDataDictionary = oDataAccessLayer.parseDictionary((JObject) eventData);
                String eventID = eventDataDictionary["eventID"].ToString();
            }
            else
            {
                oDataAccessLayer.errNumber = 1;
                oDataAccessLayer.errDescription = "Sai kiểu dữ liệu khi gửi đến hệ thống!";
            }

            retData = 1;
            return retData;
        }

        [HttpPost]
        [Route("api/getValueEvent")]
        public Object getValueEvent([FromBody] Object eventData)
        {
            Object retData;
            retData = 1;
            return retData;
        }

        [HttpPost]
        [Route("api/getMValueEvent")]
        public Object getMValueEvent([FromBody] Object eventData)
        {
            Object retData;
            retData = 1;
            return retData;
        }
    }
}

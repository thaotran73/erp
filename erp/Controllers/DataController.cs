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
            retData = 1;
            return retData;
        }

        [HttpPost]
        [Route("api/getValueEvent")]
        public Object getValueEvent([FromBody] Object eventData)
        {
            Dictionary<string, object> retData = oDataAccessLayer.initReturnData();
            Dictionary<string, object> retError = (Dictionary<string, object>) retData["error"];
            Dictionary<string, object> eventDataDictionary;

            if (oDataAccessLayer.connectionEstablish() != 0)
                return oDataAccessLayer.setReturnData(retData, "dialog", "error", oDataAccessLayer.errNumber, oDataAccessLayer.errDescription);

            Type eventDataType = eventData.GetType();
            if (eventDataType.Name == "JObject")
            {
                eventDataDictionary = oDataAccessLayer.parseDictionaryObject((JObject)eventData);
                String eventID = eventDataDictionary["eventID"].ToString();
                if (oDataAccessLayer.getListEvent(eventID) == 0)
                {
                    String executeCMD = oDataAccessLayer.oListEvent.Rows[0]["executeCMD"].ToString();
                    if (oDataAccessLayer.exeEvent(executeCMD, (Dictionary<string, object>)eventDataDictionary["param"]) == 0)
                    {
                        retError["message"] = oDataAccessLayer.errDescription = "Thực hiện " + eventID + " thành công!";
                        retError["skin"] = oDataAccessLayer.oListEvent.Rows[0]["skinMessage"].ToString();
                        retData["data"] = oDataAccessLayer.oDataTable;
                    }
                    if (oDataAccessLayer.getDBError() == 0)
                    {
                        retError["skin"] = (oDataAccessLayer.oDBError.Rows[0]["skin"].ToString() == "") ? retError["skin"].ToString() : oDataAccessLayer.oDBError.Rows[0]["skin"].ToString();
                        retError["type"] = (oDataAccessLayer.oDBError.Rows[0]["type"].ToString() == "") ? retError["type"].ToString() : oDataAccessLayer.oDBError.Rows[0]["type"].ToString();
                        retError["number"] = (oDataAccessLayer.oDBError.Rows[0]["number"].ToString() == "") ? retError["number"].ToString() : oDataAccessLayer.oDBError.Rows[0]["number"].ToString();
                        retError["message"] = oDataAccessLayer.errDescription = (oDataAccessLayer.oDBError.Rows[0]["message"].ToString() == "") ? retError["message"].ToString() : oDataAccessLayer.oDBError.Rows[0]["message"].ToString();
                    }
                }
                else
                {
                    oDataAccessLayer.errNumber = 1;
                    oDataAccessLayer.errDescription = "Không tìm thấy eventID tương ứng!";
                }
            }
            else
            {
                oDataAccessLayer.errNumber = 1;
                oDataAccessLayer.errDescription = "Sai kiểu dữ liệu khi gửi đến hệ thống!";
            }

            retError["number"] = oDataAccessLayer.errNumber;
            retError["message"] = oDataAccessLayer.errDescription;

            retData["error"] = retError;

            oDataAccessLayer.connectionClose();
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

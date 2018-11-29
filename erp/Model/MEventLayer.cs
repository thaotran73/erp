using ERP.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace erp.Model
{
    public class MEventLayer
    {
        static MDataAccessLayer oDataAccessLayer = new MDataAccessLayer();
        public DataTable oListEvent;
        public int status;

        public MEventLayer(string eventID)
        {
            status = 0;
            string sSQLQuery = "SELECT * FROM SYS_Events WHERE id = '" + eventID + "' ORDER BY orderEvent ASC";
            if (oDataAccessLayer.connectExecuteDataTable(sSQLQuery) == 0)
            {
                oListEvent = oDataAccessLayer.oDataTable;
                if (oDataAccessLayer.oDataTable.Rows.Count == 0)
                    status = 1;
            }
            else
                status = 1;
        }
    }
}

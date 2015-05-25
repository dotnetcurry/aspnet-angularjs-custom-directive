using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NG_Validations.Models
{
    public partial class EmployeeInfo
    {

        private class EmployeeInfoMetdata
        {
            public int EmpNo { get; set; }
            [Required]
            public string EmpName { get; set; }
            [Required]
            public string DeptName { get; set; }
            [Required]
            public string Designation { get; set; }
            [Required]
            public decimal Salary { get; set; }
        }
        
    }
}
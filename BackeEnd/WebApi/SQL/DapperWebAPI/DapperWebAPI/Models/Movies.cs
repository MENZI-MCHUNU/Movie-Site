using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DapperWebAPI.Models
{
  public class Movies 
  {
       public Guid Id { get; set; } = Guid.NewGuid();
       public string Movie_Name { get; set; }
       public string Movie_Category { get; set; }
       public int Movie_Rating { get; set; }
  }
}

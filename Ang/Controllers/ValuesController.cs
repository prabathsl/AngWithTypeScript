using Ang.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ang.Controllers
{
    public class ValuesController : ApiController
    {
        public static List<Lable> dataSet = new List<Lable>
        {
            new Lable {Id=1,Name="Saman" },
            new Lable {Id=2,Name="Piyal" },
            new Lable {Id=3,Name="Nimal" },
            new Lable {Id=4,Name="Amal" },
            new Lable {Id=5,Name="Chamal" },
            new Lable {Id=6,Name="Saman1" },
            new Lable {Id=7,Name="Kamal" }
        };
        // GET api/values
        public IEnumerable<Lable> Get()
        {
            return dataSet.AsEnumerable();
        }

        // GET api/values/5
        public Lable Get(int id)
        {
            return dataSet.Single(x => x.Id == id);
        }

        // POST api/values
        public void Post([FromBody]Lable value)
        {
            dataSet.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Lable value)
        {
            Lable temp = Get(id);
            temp.Name = value.Name;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            dataSet.RemoveAll(x => x.Id == id);
        }
    }
}

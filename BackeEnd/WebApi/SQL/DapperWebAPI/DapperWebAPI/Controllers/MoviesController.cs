using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DapperWebAPI.Data_Access_Layer;
using DapperWebAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace DapperWebAPI.Controllers
{
 [Route("api/[controller]")]
 // [Route("api/Movies")]
  [ApiController]
  public class MoviesController : ControllerBase
  {
    private IMovieRepository movieRepository;

    public MoviesController( IMovieRepository moviesRepository) //  dependency Injection
    {
      this.movieRepository = moviesRepository;
    }

    // GET api/values
  //  [Route("Movies")]
    [HttpGet]
    public IActionResult Get()
    {
        return this.Ok(movieRepository.GetMovies());
    }

  //  [Route("Movies/{amount}/{sort}")]
    //[HttpGet]
    //public List<Movies> Get(int amount, string sort)
   // {
   //   return movieRepository.GetMovies(amount, sort);
    //}

    // GET api/values/5
   // [Route("Movies/{id}")]
    [HttpGet("{id}")]
    public IActionResult Get(Guid id)
    {

        var movie = movieRepository.GetSingleMovies(id);
        if (movie == null)
        {
            return BadRequest();
        }
      return Ok(movie);
    } 

    // POST api/values
   // [Route("Movies")]
    [HttpPost]
    public bool Post([FromBody]Movies ourMovie)
    {
      return movieRepository.InsertMovies(ourMovie);
    }

    // PUT api/values/5
   // [Route("Movies")]
    [HttpPut]
    public IActionResult Put([FromBody]Movies ourMovies)
    {
        if (movieRepository.UpdateMovies(ourMovies))
        {
            return this.Ok();   
        }

      return Ok();
    }

    // DELETE api/values/5
   // [Route("Movies/{id}")]
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {

        if (movieRepository.DeleteMovies(id))
        {
            return Ok();
        }

      return BadRequest();
    }
  }
}

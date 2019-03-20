using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DapperWebAPI.Models;

namespace DapperWebAPI.Data_Access_Layer
{
    public interface IMovieRepository
  {
    List<Movies> GetMovies();

    Movies GetSingleMovies(Guid moviesId);

    bool InsertMovies(Movies ourMovies);

    bool DeleteMovies(Guid moviesId);

    bool UpdateMovies(Movies ourMovies);
  }
}

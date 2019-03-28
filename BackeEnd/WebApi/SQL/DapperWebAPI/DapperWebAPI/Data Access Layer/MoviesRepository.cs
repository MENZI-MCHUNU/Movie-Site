using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using DapperWebAPI.Models;
using Dapper;
using Microsoft.Extensions.Options;

namespace DapperWebAPI.Data_Access_Layer
{


  public class MoviesRepository : IMovieRepository

  {
    private readonly IDbConnection db;

    public MoviesRepository(IOptions<ConnectionString> configuration) {

         db = new SqlConnection(configuration.Value.connectionString);

    }
     
    public bool DeleteMovies(Guid moviesId)
    { // Open connectiuon
      int rowsAffected = this.db.Execute(@"DELETE FROM [Movies] WHERE Id = @MovieID ", new {  MovieID = moviesId});

      if (rowsAffected > 0)
      {
        return true;
      }
      return false;
    }

    public List<Movies> GetMovies()
    {
      return this.db.Query<Movies>("SELECT * FROM [Movies] ORDER BY [Movie_Rating] DESC").ToList();
    }

    public Movies GetSingleMovies(Guid moviesId)
    {
      return db.Query<Movies>("SELECT[Id],[Movie_Name],[Movie_Category],[Movie_Rating] FROM [Movies] WHERE Id = @MovieID ", new { MovieID = moviesId }).SingleOrDefault();
    }

    public bool InsertMovies(Movies ourMovies)
    {
      try
      { 
        int rowsAffected = this.db.Execute(@"INSERT Movies([Movie_Name],[Movie_Category],[Movie_Rating] ,[Id])  values (@Movie_Name, @Movie_Category, @Movie_Rating, @Id)", new { Movie_Name = ourMovies.Movie_Name, Movie_Category = ourMovies.Movie_Category, Movie_Rating = ourMovies.Movie_Rating, ourMovies.Id });

        if (rowsAffected > 0)
        {
          return true;
        }
        return false;


      }
      catch (Exception )
      {

        throw;
      }
      



    }

    public bool UpdateMovies(Movies ourMovies)
    {
      int rowsAffected = this.db.Execute("UPDATE [Movies] SET [Movie_Name] = @Movie_Name , [Movie_Category] = @Movie_Category , [Movie_Rating] = @Movie_Rating WHERE Id =@Id " , new {ourMovies.Movie_Name,ourMovies.Movie_Category, ourMovies.Movie_Rating, ourMovies.Id});

      if (rowsAffected > 0) {
        return true;
      }
      return false;
    }

    
  }
}

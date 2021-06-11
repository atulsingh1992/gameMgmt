using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using gamesAPI.Models;

namespace gamesAPI.Controllers
{
    public class gamesDetailController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/gamesDetail
        public IQueryable<gameDetail> GetgameDetails()
        {
            return db.gameDetails;
        }

        // GET: api/gamesDetail/5
        [ResponseType(typeof(gameDetail))]
        public IHttpActionResult GetgameDetail(decimal id)
        {
            gameDetail gameDetail = db.gameDetails.Find(id);
            if (gameDetail == null)
            {
                return NotFound();
            }

            return Ok(gameDetail);
        }

        // PUT: api/gamesDetail/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutgameDetail(decimal id, gameDetail gameDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != gameDetail.game_Id)
            {
                return BadRequest();
            }

            db.Entry(gameDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!gameDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/gamesDetail
        [ResponseType(typeof(gameDetail))]
        public IHttpActionResult PostgameDetail(gameDetail gameDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.gameDetails.Add(gameDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = gameDetail.game_Id }, gameDetail);
        }

        // DELETE: api/gamesDetail/5
        [ResponseType(typeof(gameDetail))]
        public IHttpActionResult DeletegameDetail(decimal id)
        {
            gameDetail gameDetail = db.gameDetails.Find(id);
            if (gameDetail == null)
            {
                return NotFound();
            }

            db.gameDetails.Remove(gameDetail);
            db.SaveChanges();

            return Ok(gameDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool gameDetailExists(decimal id)
        {
            return db.gameDetails.Count(e => e.game_Id == id) > 0;
        }
    }
}
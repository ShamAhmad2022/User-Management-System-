import React from 'react'

function Contact() {
  return (
    <div className='container'>
      <h2 className='py-4'>Contact</h2>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password"/>
        </div>
        <div class="mb-3">
        <label class="form-check-label" for="query">Write your query</label>
          <textarea class="form-control" id="query"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact
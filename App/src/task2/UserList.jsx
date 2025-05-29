import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [search, setSearch] = useState("")
  const [loader, setLoader] = useState(false)

  const limit = 4
  const totalPages = Math.ceil(totalItems / limit)

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true)
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
          params: {
            _page: page,
            _limit: limit,
            name_like: search,
          },
        })

        setData(response.data)
        const total = response.headers['x-total-count']
        if (total) {
          setTotalItems(parseInt(total))
        } else {
          setTotalItems(response.data.length)
        }
      } catch (error) {
        console.error("something went wrong", error)
      } finally {
        setLoader(false)
      }
    }

    const timer = setTimeout(fetchData, 1000) 

    return () => clearTimeout(timer) 
  }, [page, search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <div className='container pt-5'>
      <div className="input-group mb-4" style={{ maxWidth: "50vw", margin: "0 auto" }}>
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* Loader */}
      {loader ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className='d-flex justify-content-evenly flex-wrap'>
            {data.map((user, key) => (
              <div className="card mt-3" style={{ width: "18rem" }} key={key}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                  <p className="card-text">{user.phone}</p>
                  <a href="#" className="card-link">Email</a>
                  <a href="#" className="card-link">Call</a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(prev => Math.max(prev - 1, 1))}>
                  Previous
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">
                  Page {page} of {totalPages || 1}
                </span>
              </li>
              <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}

export default UserList

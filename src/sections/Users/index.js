import { useEffect, useState } from "react"

function UsersSection() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        setUserList(data.results)
        console.log("users", data.results)
      })
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userList.map(user => {
            return (
              <li class="bg-blue">
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                <p>{`Email: ${user.email}`}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection

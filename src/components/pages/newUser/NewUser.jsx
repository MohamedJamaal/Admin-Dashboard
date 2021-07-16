import React from 'react'
import './NewUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label> Username </label>
                    <input type="text" placeholder="jon" />
                </div>
                <div className="newUserItem">
                    <label> Fullname </label>
                    <input type="text" placeholder="jon Snow" />
                </div>
                <div className="newUserItem">
                    <label> Email </label>
                    <input type="email" placeholder="jon.snow@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label> Password </label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label> Phone </label>
                    <input type="text" placeholder="+1 123 456 858" />
                </div>
                <div className="newUserItem">
                    <label> Address </label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className="newUserItem">
                    <label> Gender </label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="femal" value="female" />
                        <label htmlFor="femal">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label> Active </label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}
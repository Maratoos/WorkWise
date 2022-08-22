import { Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addDocument } from '../../hooks/useDocument'

const styles = {
    tag: {
        display: "inline-block",
        color: "#b2b2b2",
        fontSize: "14px",
        backgroundColor: "#f1f1f1",
        borderRadius: "30px",
        padding: "7px 15px",
        fontWeight: "500",
    }
}

export const CreateJobPopup = () => {
    const user = useSelector((state) => state.user) 
    const [job, setJob] = useState({
        title: "", 
        role: "Разработчик", 
        tags: [], 
        rate: "", 
        jobType: "", 
        description: "", 
    })

    const [tempSkill, setTempSkill] = useState("")

    const handleChange = (event) => {
        setJob(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleChangeTag = (event) => {
        if(event.key === " ") {
        if(job.tags.includes(event.target.value)) return setTempSkill("")
        if(job.tags.length > 10) return setTempSkill("")
        setJob((prev) => ({
                ...prev,
                tags: [...job.tags, tempSkill]
            }))
            setTempSkill("")
            return
        }
        setTempSkill(event.target.value)
        return
    }

    const handleDeleteTag = () => {

    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      const response = await addDocument("posts", {
        ...job,
        createdAt: Timestamp.fromDate(new Date()),
        author: {
            name: user.displayName,
            photoURL: user.photoURL
        }, 
        comments: [], 
        likes: [], 
        location: "Казахстан", 
        views: 0
      })

      if(response) {
        console.log(response);
      }
    }

return (
  <div className="post-popup job_post">
    <div className="post-project">
        <h3>Post a job</h3>
        <div className="post-project-fields">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12">
                        <input required onChange={handleChange} type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="col-lg-12">
                        <div className="inp-field">
                            <select required name='category' onChange={handleChange}>
                                <option value="Разработчик">Разработчик</option>
                                <option value="СММ">СММ</option>
                                <option value="Дворник">Дворник</option>
                                <option value="Горничная">Горничная</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <input required value={tempSkill} type="text" name="skills" placeholder="Skills" onKeyDown={handleChangeTag} onChange={handleChangeTag} />
                        {Array.isArray(job.tags) && job.tags.length > 0 && (
                        <ul className="skill-tags">
                            {job.tags.map((tag) => (
                                <li>
                                  <span style={styles.tag}>{tag}</span>
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <div className="price-br">
                            <input required onChange={handleChange} type="text" name="rate" placeholder="Price" />
                            <i className="la la-dollar"></i>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inp-field">
                            <select required onChange={handleChange} name="jobType">
                                <option value="Full Time">Full Time</option>
                                <option value="Half Time">Half time</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <textarea required onChange={handleChange} name="description" placeholder="Description"></textarea>
                    </div>
                    <div className="col-lg-12">
                        <ul>
                            <li><button className="active" type="submit" value="post">Post</button></li>
                            <li><a href="#" title="">Cancel</a></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <a href="#" title=""><i className="la la-times-circle-o"></i></a>
    </div>
</div>
  )
}

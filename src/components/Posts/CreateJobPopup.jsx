import { Timestamp } from 'firebase/firestore'
import React, { useState } from 'react'
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
    const [job, setJob] = useState({
        title: "", 
        role: "Ебень", 
        tags: [], 
        rate: "", 
        jobType: "", 
        description: "", 
    })

    const [tempSkill, setTempSkill] = useState("")

    const handleChange = (event) => {
        setJob(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleChangeSkills = (event) => {
        if(event.key === "ctrl") {
        if(job.tags.includes(event.target.value)) return setTempSkill("")
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

    const handleSubmit = async (event) => {
      event.preventDefault()
      const response = await addDocument("posts", {
        ...job,
        createdAt: Timestamp.fromDate(new Date()),
        author: {
            name: "GIGACHAD",
            photoURL: "data:image/jpeg;base64,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"
        }, 
        comments: [], 
        likes: [], 
        location: "Котакбасия", 
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
                        <input onChange={handleChange} type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="col-lg-12">
                        <div className="inp-field">
                            <select name='category' onChange={handleChange}>
                                <option value="Ебень">Разработчик</option>
                                <option value="Конч">СММ</option>
                                <option value="Далб">Дворник</option>
                                <option value="Котакпаш">Горничная</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <input value={tempSkill} type="text" name="skills" placeholder="Skills" onKeyDown={handleChangeSkills} onChange={handleChangeSkills} />
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
                            <input onChange={handleChange} type="text" name="rate" placeholder="Price" />
                            <i className="la la-dollar"></i>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inp-field">
                            <select onChange={handleChange} name="jobType">
                                <option value="Full Time">Full Time</option>
                                <option value="Half Time">Half time</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <textarea onChange={handleChange} name="description" placeholder="Description"></textarea>
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
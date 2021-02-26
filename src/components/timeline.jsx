import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>RedCarpet - Full stack intern</b> <span>March2020 - June2020</span></h2>
                        <p>I have completed working with RedCarpet as a Full Stack Intern in the DevOps team.
                        My major part of the work has been working with docker to containerize applications and
                        work with Airflow to schedule jobs. I also worked with the Frontend Team in building
                        new componenets in React. I worked closely with PL/SQL in writing querries on the system.
                        I have also a working knowledge of various version control tools like Git, BitBucket.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>MIT World Peace University</b> <span>2017-2021</span></h2>
                        <p>I am currently in my final year and pursuing my under-graduation studies
                        with majors in Computer Science and Engineering with <b>CGPA 9.26</b>. I have taken courses like DSA, OOPs,
                        Computer Networks over the years and have better understanding of these subjects.
                           I have also been part of Student Council in my first year of college.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Primary Education</b> <span>2003-2014</span></h2>
                        <p>I have completed my higher secondary education with major subjects as
                        Physics, Chemistry & Maths with 85%. During my time at school,
                        I have developed interest in solving complex problems of the fundamental
                        physics which helped me to improve my understanding of any problem and
                          also my mathematical skills to actually solve the problems.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

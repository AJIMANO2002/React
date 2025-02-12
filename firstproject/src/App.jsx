import React from 'react'

function App() {
  let data = [
    {
      title: "Project One",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title: "Project two",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title: "Project three",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title: "Project four",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title: "Project five",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    },
    {
      title: "Project six",
      image: "https://via.placeholder.com/700x400",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                  aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                  dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!`
    }


  ]
  return <>
    <div className="container">
      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>
      <div className="row">
        {
          data.map((e, index) => {
            return <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src={e.image} alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{e.title}</a>
                  </h4>
                  <p className="card-text">{e.description}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  </>
}

export default App
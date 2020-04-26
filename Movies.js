import React, { useState } from 'react'
import Movie from './Movie.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'



export default function Movies() {
    const [formValues, setFormValues] = useState({
        filmName: '',
        filmRating: '',
        filmReleaseDate: '',
        filmImage: ''
    })
    const hundleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitadd = (e) => {
        e.preventDefault()
        if (formValues.filmName && formValues.filmRating && formValues.filmReleaseDate && formValues.filmName) {

            setMovie([...movies, { name: formValues.filmName, rating: formValues.filmRating, releaseDate: formValues.filmReleaseDate, image: formValues.filmImage }])

            setFormValues({
                filmName: '',
                filmRating: '',
                filmReleaseDate: '',
                filmImage: ''
            })
        } else {
            alert('You have to fill all the form fields')
            return
        }


    }
    const [movies, setMovie] = useState([
        { name: "Avengers Endgamen Ball", rating: 4, releaseDate: 2019, image: "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg" },
        { name: "Free", rating: 5, releaseDate: 2019, image: "https://fr.web.img2.acsta.net/pictures/20/03/12/11/36/4874079.jpg" },
        { name: "Bad Boys 3", rating: 3, releaseDate: 2020, image: "https://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg" },
        { name: "Extinction", rating: 2, releaseDate: 2018, image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Extinction.png" },
        { name: "Annihilation", rating: 5, releaseDate: 2018, image: "https://media.senscritique.com/media/000017617001/source_big/Annihilation.jpg" },
        { name: "the great wall", rating: 4, releaseDate: 2017, image: "https://www.screenfantastique.com/uploads/1/9/6/2/19626163/the-great-wall-movie-2017-poster6_orig.jpg" },
        { name: "Everest", rating: 2, releaseDate: 2015, image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Everest_poster.jpg/220px-Everest_poster.jpg" },

    ]);
    const [newinput, setInput] = useState("");
    const handlNewTodoChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    const handlesearch = (e) => {
        e.preventDefault();
        if ((newinput.length === 1) && (!isNaN(newinput))) {
            setMovie(movies.filter((elem) => elem.rating == newinput));

        }
        else {
            if ((newinput.length) === 4 && (!isNaN(newinput))) {
                setMovie(movies.filter((elem) => elem.releaseDate == newinput));

            }
            else
                setMovie(movies.filter((elem) => elem.name.toLowerCase().includes(newinput.toLowerCase())));

        }

    }
    return (
        <div class="container-fluid mydiv">

            <InputGroup className="mb-3 b">
                <FormControl
                    placeholder="input movie to search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={newinput} onChange={handlNewTodoChange} />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handlesearch}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <div className="row f">

                {
                    movies.map(elem => (
                        <Movie name={elem.name} rating={elem.rating} releaseDate={elem.releaseDate} image={elem.image} />
                    ))
                }
            </div>
            <div className="row myformtoadd">
                <Form className="center" onSubmit={handleSubmitadd}>
                    <Form.Group>
                        <Form.Control name="filmName" value={formValues.filmName} onChange={hundleInputChange} type="text" placeholder="Enter name of movie" />

                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="filmRating" value={formValues.filmRating} onChange={hundleInputChange} type="number" placeholder="Enter the rating of movie" />

                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="filmReleaseDate" value={formValues.filmReleaseDate} onChange={hundleInputChange} type="number" placeholder="Enter the date of movie" />

                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="filmImage" value={formValues.filmImage} onChange={hundleInputChange} type="text" placeholder="Enter the image of movie" />

                    </Form.Group>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="info" type="submit">Add movie
                     </Button>
                    </div>


                </Form>
            </div>

        </div>
    )
}

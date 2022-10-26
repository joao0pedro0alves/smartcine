import { useEffect, useState } from "react"

import toast from "react-hot-toast"

import formatter from "../../services/formatter"
import { IMAGE_URL } from "../../consts/apiFetch"

import {
    Card,
    CardActionArea,
    CardMedia,
    Paper,
    Typography,
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import Loader from "../../components/Loader"
import TextBox from "../TextBox"
import FavoriteButton from "../Buttons/Favorite"
import { DetailsImage } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const GET_RATINGS_VALUE = (current) => current.vote_average.toFixed(1)

export default function FilmDetails({ current, isFavorite, onAddToFavorites }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [trailerVideoId, setTrailerVideoId] = useState("")
    const [loading, setLoading] = useState(true)

    const getReleaseYear = current.release_date.split("-").shift()

    useEffect(() => {
        const getTrailerVideo = async () => {
            await fetch(
                `https://www.googleapis.com/youtube/v3/search?snippet&q=${current.title} ${getReleaseYear} trailer&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=15`, // Get inside .env.example, into app root, to know how to configure your credentials
            )
                .then((response) => response.json())
                .then((data) => setTrailerVideoId(data.items[0].id.videoId))
                .catch(() =>
                    toast.error(
                        "There was a problem to load trailer...\n Try later",
                    ),
                )
                .finally(() => {
                    setLoading(false)
                })
        }
        getTrailerVideo()
    }, [current.title, getReleaseYear])

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            <TextBox variant="h4">{current.title}</TextBox>
            <DetailsImage
                className="w-100 rounded-2"
                src={`${IMAGE_URL}${
                    current.backdrop_path
                        ? current.backdrop_path
                        : current.poster_path
                }`}
                alt={current.title}
            />
            <Paper className="py-3 px-5 bg-dark bg-opacity-25 rounded-2 w-100">
                <TextBox
                    variant="body1"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="d-inline-flex gap-2 justify-content-center align-items-center bg-light text-body p-1 px-2 rounded-pill">
                        <Typography variant="h6">Ratings:</Typography>
                        <Typography variant="h6">{`${GET_RATINGS_VALUE(
                            current,
                        )} / 10.00`}</Typography>
                        <Rating
                            defaultValue={0}
                            value={GET_RATINGS_VALUE(current) / 2}
                            max={5}
                            precision={0.5}
                            readOnly
                            style={{ marginBottom: "2px" }}
                        />
                    </div>
                </TextBox>
                <TextBox variant="body1">
                    <b>Overview: </b>
                    {current.overview}
                </TextBox>
                <TextBox variant="body2">
                    <b>Release Date: </b>
                    {formatter(current.release_date).toSimpleDate()}
                </TextBox>
                <TextBox variant="body1">
                    <b>Trailer: </b>
                </TextBox>

                {loading ? (
                    <Loader />
                ) : (
                    <Card className="mb-3 bg-dark bg-opacity-25">
                        <CardActionArea>
                            <CardMedia
                                component="iframe"
                                src={`https://www.youtube.com/embed/${trailerVideoId}`}
                                height={400}
                            />
                        </CardActionArea>
                    </Card>
                )}
                <div className="d-flex align-items-center justify-content-end">
                    <FavoriteButton
                        label="Add to favorites"
                        iconSize="small"
                        isFavorite={isFavorite}
                        onToggleFavorites={onAddToFavorites}
                    />
                </div>
            </Paper>
        </>
    )
}

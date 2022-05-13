export const ambilData = () => {

    const data = [
        { id: 28, no: '1', name: "Action" },
        { id: 12, no: '2', name: "Adventure" },
        { id: 16, no: '3', name: "Animation" },
        { id: 35, no: '4', name: "Comedy" },
        { id: 80, no: '5', name: "Crime" },
        { id: 99, no: '6', name: "Documentary" },
        { id: 18, no: '7', name: "Drama" },
        { id: 10751, no: '8', name: "Family" },
        { id: 14, no: '9', name: "Fantasy" },
        { id: 36, no: '10', name: "History" },
        { id: 27, no: '11', name: "Horror" },
        { id: 10402, no: '12', name: "Music" },
        { id: 9648, no: '13', name: "Mystery" },
        { id: 10749, no: '14', name: "Romance" },
        { id: 878, no: '15', name: "Science Fiction" },
        { id: 10770, no: '16', name: "TV Movie" },
        { id: 53, no: '17', name: "Thriller" },
        { id: 10752, no: '18', name: "War" },
        { id: 37, no: '19', name: "Western" }
    ]

    //Action
    return {
        type: "AMBIL_DATA",
        data: data
    }
}
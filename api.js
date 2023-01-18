export const database = [
    { name: 'BRAHMĀSTRA PART ONE', imgUrl: 'https://www.rottentomatoes.com/m/brahmastra_part_one_shiva#&gid=1&pid=0' },
    { name: 'RRR ', imgUrl: 'https://www.imdb.com/title/tt8178634/mediaviewer/rm954733825/?ref_=tt_md_1' },
    { name: 'Code Name: Tiranga', imgUrl: 'https://www.imdb.com/title/tt22099068/mediaviewer/rm2466775553/?ref_=tt_ov_i' },
    { name: 'AVATAR: THE WAY OF WATER', imgUrl: 'https://www.imdb.com/title/tt1630029/mediaviewer/rm92486145/?ref_=tt_ov_i' },
    { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg' }
]
export const availibility = {
    '21 Jump Street': [1, 2, 5, 8, 9,19,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cars': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }
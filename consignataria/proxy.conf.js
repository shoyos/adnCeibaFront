const PROXY_CONFIG = [
    {
        context: [
            "consignataria/publicaciones",
            "consignataria/asesorias",
        ],
        //target_dev: "http://localhost:8080",
        target: "http://104.45.182.234:8080/",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
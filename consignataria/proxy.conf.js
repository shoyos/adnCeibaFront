const PROXY_CONFIG = [
    {
        context: [
            "/publicaciones",
            "/asesorias",
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
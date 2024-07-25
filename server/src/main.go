package main

import (
	"fmt"
	"log"
	"net/http"
	"websocket/src/domain"
	"websocket/src/handlers"
	"websocket/src/services"

	// db接続
	"database/sql"

	_ "github.com/lib/pq"
)

func setupDB(dbDriver string, dsn string) (*sql.DB, error) {
	db, err := sql.Open(dbDriver, dsn)
	if err != nil {
		return nil, err
	}
	return db, err
}

func main() {
	// db接続
	dbDriver = "postgres"
	dsn := "host=127.0.0.1 port=5432 user=user password=password dbname=dbname sslmode=disable"
	db, err := setupDB(dbDriver, dsn)
	defer db.Close()

	if err != nil {
		log.Fatal(err)
	}

	// チャット
	pubsub := services.NewPubSubService()
	hub := domain.NewHub(pubsub)
	go hub.SubscribeMessages()
	go hub.RunLoop()

	http.HandleFunc("/ws", handlers.NewWebsocketHandler(hub).Handle)

	port := "80"
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%v", port), nil); err != nil {
		log.Panicln("Serve Error:", err)
	}
}

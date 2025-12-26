package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Service struct {
	Name    string `json:"name"`
	Version string `json:"version"`
	Status  string `json:"status"`
}

func servicesHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	services := []Service{
		{
			Name:    "HealthCore",
			Version: "0.1",
			Status:  "Running",
		},

		{
			Name:    "FlowEngine",
			Version: "0.1",
			Status:  "Running",
		},
	}
	json.NewEncoder(w).Encode(services)

}

func main() {
	http.HandleFunc("/services", servicesHandler)
	http.ListenAndServe(":8080", nil)
	fmt.Println("Server is running on port 8080")
}

package main

import (
	"encoding/csv"
	//"encoding/json"
	"fmt"
	"os"
	"log"
)

func readCsvFile(filePath string) [][]string {
	f, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file " + filePath, err)
	}
	defer f.Close()

	csvReader := csv.NewReader(f)
	records, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse file as CSV for " + filePath, err)
	}

	return records
}

func main() {
	
	if len(os.Args) != 2 {
		fmt.Println("incorrect input length")
	} else {
		csvFile := os.Args[1]

		records := readCsvFile(csvFile)
		fmt.Println(records)
	}
}



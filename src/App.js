/* Sorting Algorithm in Data Structure
 * @Implemented By: Plipus Tel
 * @Created Date: Mei 28, 2023
 * @Lastest Updated: Jun 01 2023
 * Test update
 */
import React, { useState } from "react";
import "./App.css";

function App() {
  /* Unseroted Data */
  const unsortedData = [9, 1, 3, 2, 5, 6, 9, 4, 5, 7, 8];

  /* Bubble Sort Data Array */
  const [bubbleSortData, setBubbleSortData] = useState([...unsortedData]);

  /* Selection Sort */
  const [selectionSortData, setSelectionSortData] = useState([...unsortedData]);

  const ResetNumbers = () => {
    setBubbleSortData([...unsortedData]);
    setSelectionSortData([...unsortedData]);
  };

  /* 1. Bubble Sort 
  > Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements, 
    compares adjacent elements, and swaps them if they are in the wrong order. 
    The process is repeated until the list is sorted.
    
  > The name "bubble sort" comes from the way smaller elements "bubble" to the beginning of 
   the list with each pass. The largest elements gradually "bubble" to the end of the list.

  > Bubble sort is not an efficient sorting algorithm for large lists, as its average and 
    worst-case time complexity is O(n^2), where n is the number of elements in the list. However, 
    it is relatively easy to understand and implement, making it useful for educational purposes or 
    small lists where efficiency is not a significant concern. */
  const BubbleSort = () => {
    const newSortedData = [...bubbleSortData];

    for (let i = 0; i <= newSortedData.length - 1; i++) {
      for (let j = 0; j <= newSortedData.length - i - 1; j++) {
        if (newSortedData[j] > newSortedData[j + 1]) {
          let temp = newSortedData[j]; //hold for temporary the bigger data, to switch its position later
          newSortedData[j] = newSortedData[j + 1];
          newSortedData[j + 1] = temp;
        }
      }
    }
    setBubbleSortData(newSortedData);
  };

  /* 2. Selection Sort 
  > The selection sort algorithm always selects the smallest (or largest) element from the remaining unsorted 
    portion and moves it to its correct position in the sorted portion. This process continues until 
    the entire list is sorted. 
  > 
  */

  const SelectionSort = () => {
    const newSortedData = [...bubbleSortData];
    for (let i = 0; i <= newSortedData.length - 1; i++) {
      let minIndex = i; // assume i = 0 -> 4
      for (let j = i; j <= newSortedData.length - 1; j++) {
        // we start from the next 'box'
        if (newSortedData[j] < newSortedData[minIndex]) {
          minIndex = j; // assume found j = 3 -> 1 after j iteration
        }
      }
      // we need to move the founded minimum value to iteration i, and move i to founded j
      console.log("iteration-" + i + " minIndex found in " + minIndex);
      let temp = newSortedData[i];
      newSortedData[i] = newSortedData[minIndex];
      newSortedData[minIndex] = temp;
    }
    setSelectionSortData(newSortedData);
  };

  return (
    <div>

      <h1>Sorting Algorithms</h1>
      <span>By Plipus Tel <a href="https://www.plipustel.com" target="_blank">https://www.plipustel.com</a></span>
      <hr></hr>
      <h3>Unsorted Data Array</h3>
      <ul className="numbers">
        {unsortedData.map((rows, index) => (
          <li className="items" key={index}>
            {rows}
          </li>
        ))}
      </ul>
      
      <button onClick={ResetNumbers}>Reset All Numbers</button>
  

      <h3>1. Bubble Sort</h3>
      <button onClick={BubbleSort}>Bubble Sort</button>
      <ul className="numbers">
        {bubbleSortData.map((rows, index) => (
          <li className="items" key={index}>
            {rows}
          </li>
        ))}
      </ul>

      <h3>2. Selection Sort</h3>
      <button onClick={SelectionSort}>Selection Sort</button>
      <ul className="numbers">
        {selectionSortData.map((rows, index) => (
          <li className="items" key={index}>
            {rows}
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;

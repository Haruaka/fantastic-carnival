//Hook-based React Practice Assignment
import React, { useState } from "react";
import List from "./components/List";

// THE COMPONENT =====================================================
export default function App() {
  return (
    <div class="container">
    Hello
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <List/>
    <List/>
    <List/>
    <List/>
  </div>
  )
}

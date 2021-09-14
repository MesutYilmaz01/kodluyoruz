import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import React from "react";
import Header from "./Header";
import EmojiResultRow from "./EmojiResultRow";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";



describe("Todo testleri", () => {

    test("Baslik render ediliyor mu?", () => {
      render(<Header/>)
      let baslik = screen.getByText("Emoji Search")
      expect(baslik).toBeInTheDocument()
    })

    test("Emoji listesi tam geliyor mu?", () => {
      render(<EmojiResults/>)
      const list = screen.getAllByText(/Clip/i)
      expect(list.length).toEqual(20)
    })


})
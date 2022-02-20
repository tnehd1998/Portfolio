import React from "react";
import { useRecoilValue } from "recoil";
import { quotesState } from "../../store/info.js";

import {
  DescriptionContainer,
  CommentContainer,
  DescriptionComment,
} from "./PersonalDescription.styles.jsx";

const PersonalDescription = () => {
  const quotes = useRecoilValue(quotesState);

  const currentQuote = (row) => {
    const currentQuotes = quotes[row - 1];
    const combinedQuotes = currentQuotes.join(" ");
    return `📌 ${combinedQuotes}`;
  };

  return (
    <DescriptionContainer>
      <CommentContainer>
        <DescriptionComment>{currentQuote(1)}</DescriptionComment>
        <DescriptionComment>{currentQuote(2)}</DescriptionComment>
        <DescriptionComment>{currentQuote(3)}</DescriptionComment>
        <DescriptionComment>{currentQuote(4)}</DescriptionComment>
      </CommentContainer>
    </DescriptionContainer>
  );
};

export default PersonalDescription;

import React from 'react';
import styled from 'styled-components';
import { LightBlueCard } from '../general/card';
import { Comment } from '../../typings/comment';

interface CommentsProps {
  comments: Comment[];
}

const ScrollingCommentSection: React.FC<CommentsProps> = props => {
  return (
    <AllContainer>
      <Comments comments={props.comments} />
    </AllContainer>
  );
};

export default ScrollingCommentSection;

const Comments: React.FC<CommentsProps> = props => {
  return (
    <CommentsContainer>
      {props.comments.map(commie => (
        <CommentContainer key={commie.id}>
          <LightBlueCard>
            <AuthorName>{commie.authorName}</AuthorName>
            <Content>{commie.content}</Content>
          </LightBlueCard>
          <ReplyContainer>
            {<Comments comments={commie.replies}></Comments>}
          </ReplyContainer>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
};

const AllContainer = styled.div`
  overflow-y: scroll;
  border: 10px;
  height: 100%;
`;

const CommentsContainer = styled.div`
  float: bottom;
`;

const CommentContainer = styled.div`
  margin-top: 12px;
`;

const ReplyContainer = styled.div`
  margin-left: 30px;
`;

const AuthorName = styled.u`
  display: inline-block;
  font-family: 'Roboto';
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

const Content = styled.p`
  display: inline-block;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

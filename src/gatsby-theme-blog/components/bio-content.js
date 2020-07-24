import React, { Fragment } from 'react';
import { Styled } from 'theme-ui';

const BioContent = () => (
  <Fragment>
    Words by <Styled.a href='http://example.com/'>Khris P.</Styled.a>.
    <br />
    Changed default now!
  </Fragment>
);

export default BioContent;

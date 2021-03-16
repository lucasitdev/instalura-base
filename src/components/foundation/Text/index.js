import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

export const TextStyleVariantsMap = {
    smallestException,
    paragraph1,
    title: css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.titleXS.fontSize};
        font-weight: ${theme.typographyVariants.titleXS.fontWeight};
        line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
        md: css`
            ${({ theme }) => css`
                font-size: ${theme.typographyVariants.title.fontSize};
                font-weight: ${theme.typographyVariants.title.fontWeight};
                line-height: ${theme.typographyVariants.title.lineHeight};
        `}        
        `,
    })}
    `,      
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariantsMap[variant]}
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
`;

export default function Text({ tag, variant, children }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),   
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
};

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
};
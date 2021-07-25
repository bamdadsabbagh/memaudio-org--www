import React from 'react'
import PropTypes from 'prop-types'
import { Container, Card } from './card.component.styles'
import { useCardComponent } from '../../hooks'
import { GameComponent } from '../game'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'id': PropTypes.number.isRequired,
    'color': PropTypes.string,
    'callback': PropTypes.func,
    'leaveOnCallback': PropTypes.bool,
}

const defaultProps = {
    'color': undefined,
    'callback': undefined,
    'leaveOnCallback': undefined,
}

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children card content
 * @param {number} props.id card id (only relative to grid)
 * @param {string} props.color card color
 * @param {Function} props.callback card callback
 * @param {boolean} props.leaveOnCallback grid should leave?
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    id,
    color = defaultProps.color,
    callback = defaultProps.callback,
    leaveOnCallback = defaultProps.leaveOnCallback,
}) {

    const {
        // container
        ref,
        width,
        height,
        // faces
        front,
        back,
        // animations
        spring,
        // ui
        boardIsLocked,
        gameIsRunning,
        gameColor,
        // interactions
        handleClick,
    } = useCardComponent ({
        children,
        id,
        callback,
        leaveOnCallback,
    })

    // const state = useStore ((state) => state)
    //
    // console.log (state)
    
    return (
        <>
            <GameComponent/>
            <Container
                ref={ref}
                tabIndex={-1}
                role="button"
            >
                <Card
                    $isFront
                    $color={color}
                    width={width}
                    height={height}
                    onClick={!boardIsLocked ? handleClick : undefined}
                    style={{
                        'opacity': spring.opacity.to ((o) => 1 - o),
                        'transform': spring.transform,
                    }}
                >
                    {front}
                </Card>
                <Card
                    $isBack
                    $color={gameIsRunning ? gameColor : color}
                    width={width}
                    height={height}
                    onClick={
                        typeof back.props.children === 'undefined'
                            ? undefined
                            : handleClick
                    }
                    style={{
                        'opacity': spring.opacity,
                        'transform': spring.transform,
                        'rotateY': '180deg',
                    }}
                >
                    {back}
                </Card>
            </Container>
        </>
    )

}

CardComponent.propTypes = propTypes

CardComponent.defaultProps = defaultProps
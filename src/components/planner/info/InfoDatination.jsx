import { useRef } from 'react';
import styled from 'styled-components';
import Slider from '../../common/Slider';

const InfoDatinationBlock = styled.div`
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
`;

const DateList = styled.ul`
    display: flex;
    padding: 0.5rem 0.2rem;
    margin: 0;
    width: 100%;
`;

const DateBox = styled.li`
    position: relative;
    border-radius: 2rem;
    cursor: pointer;
    & + & {
        margin-left: 0.5rem;
    }
    &[aria-current] {
        box-shadow: 0px 1px 6px ${(props) => props.theme.shadowColor};
    }
`;

const DateButton = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-weight: bold;
    white-space: nowrap;
    font-size: 0.7rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.primaryButtonBackgroundColor};
    border-radius: 2rem;
    box-shadow: 0px 1px 3px ${(props) => props.theme.shadowColor};
    text-align: center;
    &:hover {
        box-shadow: 0px 1px 6px ${(props) => props.theme.shadowColor};
        background-color: ${(props) => props.theme.hoverBackgroundColor};
        color: ${(props) => props.theme.hoverColor};
    }
    &[aria-current] {
        background-color: ${(props) => props.theme.clickedButtonBackgroundColor};
        color: ${(props) => props.theme.primaryColor};
    }
`;

const RouteLine = styled.div`
    background-color: ${(props) => props.theme.tertiaryColor};
    width: 2rem;
    height: 0.2rem;
    position: absolute;
    left: 16%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

const InfoDatination = ({ planner, plannerData, drag, onChangeCurPlanId, onClickToggleScheduleView }) => {
    const { plans } = { ...planner };
    const itemRef = useRef();

    const letsFormat = (d) => {
        const date = new Date(d);
        return ('0' + (date.getMonth() + 1)).slice(-2) + ' / ' + ('0' + date.getDate()).slice(-2);
    };

    return (
        <InfoDatinationBlock>
            {plans && plans.length > 0 && (
                <Slider list={plans} drag={drag} itemRef={itemRef}>
                    <DateList>
                        {plans.map((p, i) => (
                            <DateBox
                                ref={itemRef}
                                key={p.planId}
                                aria-current={p.planId === plannerData.planId ? 'date' : null}
                                onClick={() => {
                                    onChangeCurPlanId(p.planId);
                                    onClickToggleScheduleView(false);
                                }}
                            >
                                <DateButton aria-current={p.planId === plannerData.planId ? 'date' : null}>
                                    {letsFormat(p.planDate)}
                                </DateButton>
                                {i !== 0 && <RouteLine />}
                            </DateBox>
                        ))}
                    </DateList>
                </Slider>
            )}
        </InfoDatinationBlock>
    );
};

export default InfoDatination;

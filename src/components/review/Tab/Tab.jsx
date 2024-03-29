import styled, { css } from 'styled-components';

const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const TabItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const TabItem = styled.div`
    box-sizing: border-box;
    min-width: 5.625rem;
    height: 2.375rem;
    ${(props) =>
        props.active &&
        css`
            border-bottom: 1px solid ${(props) => props.theme.mainColor};
        `}
`;

const TabContentContainer = styled.div`
    min-height: 11.25rem;
`;

const Content = styled.div``;

export const TabContent = (props) => {
    const { className, children, index, selectTab } = props;
    return <>{index == selectTab && <Content className={className}>{children}</Content>}</>;
};

const Tab = ({ children, tabItems, selectTab, onChangeTab, onItemClick }) => {
    return (
        <TabContainer>
            <TabItemContainer>
                {tabItems.map((item, i) => (
                    <TabItem key={i} active={item.id == selectTab} onClick={() => onChangeTab(item)}>
                        {item.title}
                    </TabItem>
                ))}
            </TabItemContainer>
            <TabContentContainer>{children}</TabContentContainer>
        </TabContainer>
    );
};

export default Tab;

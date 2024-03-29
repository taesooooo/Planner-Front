import styled from 'styled-components';
import Loading from '../common/Loading';
import Modal from '../common/Modal';

const MemberBox = styled.div`
    min-width: 25rem;
    min-height: 14rem;
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    border-radius: 0.5rem;
    @media all and (max-width: 480px) {
        min-width: auto;
    }
`;

const InviteBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.input`
    width: 80%;
    height: 2rem;
    border: none;
    border-radius: 0.3rem;
    padding: 0 0.5rem;
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    box-shadow: 0px 1px 3px ${(props) => props.theme.shadowColor};
    &::placeholder {
        color: ${(props) => props.theme.tertiaryColor};
    }
    &:focus {
        color: ${(props) => props.theme.tertiaryColor};
        outline: none;
    }
`;

const Button = styled.button`
    width: 3.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    white-space: nowrap;
    background-color: ${(props) => props.theme.primaryButtonBackgroundColor};
    box-shadow: 0px 1px 3px ${(props) => props.theme.shadowColor};
    font-weight: bold;
    margin-left: 0.5rem;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.hoverColor};
        box-shadow: 0px 1px 6px ${(props) => props.theme.shadowColor};
    }
`;

const MemberList = styled.ul`
    box-shadow: 0 0 2px ${(props) => props.theme.shadowColor};
    padding: 0.5rem;
    overflow: auto;
    height: 8rem;
`;

const Member = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ErrorText = styled.div`
    color: ${(props) => props.theme.errorColor};
    font-weight: bold;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0;
`;

const InviteText = styled(ErrorText)`
    color: ${(props) => props.theme.mainColor};
`;

const CenterDiv = styled.div`
    height: 14rem;
    position: relative;
`;

const MemberModal = ({
    planner,
    members,
    loading,
    modal,
    plannerError,
    isInvite,
    onChangeMember,
    onDeleteMember,
    onInviteMember,
    onToggleMemberModal,
}) => {
    const { planMembers, creator } = { ...planner };
    return (
        <Modal
            modalVisible={modal.member}
            title="멤버 관리"
            onModalClose={() => {
                onToggleMemberModal();
            }}
            onModalConfirm={() => {
                onToggleMemberModal();
            }}
        >
            <MemberBox>
                {loading.deleteMemberLoading || loading.inviteMemberLoading ? (
                    <CenterDiv>
                        <Loading size="small" pos="center" />
                    </CenterDiv>
                ) : (
                    <>
                        <InviteBox>
                            <Text
                                placeholder="초대할 아이디"
                                type="text"
                                onChange={(e) => {
                                    onChangeMember(e.target.value);
                                }}
                                value={members.length > 0 ? members[0] : ''}
                            />
                            <Button onClick={onInviteMember}>초대</Button>
                        </InviteBox>
                        {plannerError && <ErrorText>{plannerError.members || plannerError}</ErrorText>}
                        {isInvite && <InviteText>전송 완료!</InviteText>}
                        <h5>현재 멤버</h5>
                        <MemberList>
                            {planMembers &&
                                planMembers.map((m, i) =>
                                    creator !== m ? (
                                        <Member key={i}>
                                            <p>{m}</p>
                                            <Button
                                                onClick={() => {
                                                    onDeleteMember(m);
                                                }}
                                            >
                                                제거
                                            </Button>
                                        </Member>
                                    ) : (
                                        <Member key={i}>
                                            <p>{m}</p>
                                        </Member>
                                    ),
                                )}
                        </MemberList>
                    </>
                )}
            </MemberBox>
        </Modal>
    );
};

export default MemberModal;

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Votes{

//제안서를 만든사람 
 address public chairperson;

//제안서 index
uint public proposalLen = 0; // 제안서 숫자 값입니다. 제안이 생성될 때마다 1씩 올라갑니다.

//거버넌스에 투표하는 voter 구조체 
    struct Voter {
        bytes32 unionId;
        // 어떤 proposal인지 
        address addr;
        // 주소
        uint256 asset;
        // 베팅 금액
        bool voted;
        // 투표여부
        string answer;
        //투표
    }


struct Proposal {
        address chairperson;
        bytes32 UnionId;
        Voter[] Voters;
        bool open;
           // 참여자 정보
    }


 // 각종 이벤트들 
event showProposal(bytes32 indexed unionId, address indexed chairperson); 
event voteReceipt(address indexed voter, string answer);
   
  Proposal public proposal;


//* 컨트랙트를 생성과 동시에 제안이 만들어져있다. 
//* 만들어질때 unionId, chairPersion, open 값들이 담겨진다. 
 
    constructor(bytes32 unionId){
       proposal.chairperson = msg.sender;
       proposal.UnionId = unionId;
       proposal.open = true;
       emit showProposal(unionId,msg.sender);
    }




     //중복투표 및 제안서를 낸 사람을 미리 check해주는 modifier
     modifier valid(address voter){
        
         for(uint i=0; i<proposal.Voters.length; i++){
             if(proposal.Voters[i].addr == voter){
               require(proposal.Voters[i].voted == false, "voter already voted"); 
             }
         }
        require(msg.sender !=  proposal.chairperson,"chairperson is not alrigth");
        _;
    }

    // 3.투표하는 함수
     function vote (string memory answer) public payable valid(msg.sender) {
     require(proposal.open == true, "current proposal closed");
     require(msg.value >= 1e18,"more than send the token");

      Voter memory voter = Voter({
          addr:msg.sender,
          asset:msg.value,
          voted:true,
          answer:answer,
          unionId : proposal.UnionId
          });
      address(this).call{value:msg.value};
      proposal.Voters.push(voter);
      emit voteReceipt(msg.sender, answer);
    }

    //투표내역이 전부 나오게 된다. 
    function totalVoteOutput() external view returns(Voter[] memory){
        Voter[] memory result = proposal.Voters;
      return  result;
    }

    function totalProposal() external view returns(Proposal memory){
    //  Proposal memory result = proposal;
    //   return result.UnionId;
     Proposal memory result = proposal;
     return result;
    }

}


    //미리 투표가능한 인원을 조합마다 한정해서 투표 권한을 부여해주는 함수 
    // function registerVoter(address[] memory addrs, uint proposalIndex) external returns(address[] memory){
    //      for(uint i=0; i<addrs.length; i++){
    //       Voter memory voter;
    //       voter.addr = addrs[i];
    //       Proposals[proposalIndex].Voters.push(voter); 
    //    }
    //    return addrs;
    //    }

     //등록된 주소인지 확인하는 함수 
    //  function validAddress(uint proposalIndex) internal view returns(bool result){
    //      uint check = 0;
    //      for(uint i=0; i< Proposals[proposalIndex].Voters.length; i++){
    //      Proposals[proposalIndex].Voters[i].addr == msg.sender;
    //     check++;
    //    }
    //    if(check > 0){
    //        result = true;
    //    }else {
    //        result = false;
    //    }
    //  }

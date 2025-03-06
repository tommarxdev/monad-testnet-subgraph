import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AllowedSmartContractUpdated,
  Approval,
  ApprovalForAll,
  BaseURISet,
  EnforcedOptionSet,
  MsgInspectorSet,
  ONFTReceived,
  ONFTSent,
  OwnershipTransferred,
  PeerSet,
  PreCrimeSet,
  PublicMint,
  PublicPhaseStarted,
  TokenEvolved,
  Transfer,
  WhitelistMint,
  WhitelistPhaseStarted,
  WhitelistUpdated
} from "../generated/OmniNadsMinter/OmniNadsMinter"

export function createAllowedSmartContractUpdatedEvent(
  _address: Address,
  _isAllowedSmartContract: boolean
): AllowedSmartContractUpdated {
  let allowedSmartContractUpdatedEvent =
    changetype<AllowedSmartContractUpdated>(newMockEvent())

  allowedSmartContractUpdatedEvent.parameters = new Array()

  allowedSmartContractUpdatedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  allowedSmartContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_isAllowedSmartContract",
      ethereum.Value.fromBoolean(_isAllowedSmartContract)
    )
  )

  return allowedSmartContractUpdatedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBaseURISetEvent(baseURI: string): BaseURISet {
  let baseUriSetEvent = changetype<BaseURISet>(newMockEvent())

  baseUriSetEvent.parameters = new Array()

  baseUriSetEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return baseUriSetEvent
}

export function createEnforcedOptionSetEvent(
  _enforcedOptions: Array<ethereum.Tuple>
): EnforcedOptionSet {
  let enforcedOptionSetEvent = changetype<EnforcedOptionSet>(newMockEvent())

  enforcedOptionSetEvent.parameters = new Array()

  enforcedOptionSetEvent.parameters.push(
    new ethereum.EventParam(
      "_enforcedOptions",
      ethereum.Value.fromTupleArray(_enforcedOptions)
    )
  )

  return enforcedOptionSetEvent
}

export function createMsgInspectorSetEvent(
  inspector: Address
): MsgInspectorSet {
  let msgInspectorSetEvent = changetype<MsgInspectorSet>(newMockEvent())

  msgInspectorSetEvent.parameters = new Array()

  msgInspectorSetEvent.parameters.push(
    new ethereum.EventParam("inspector", ethereum.Value.fromAddress(inspector))
  )

  return msgInspectorSetEvent
}

export function createONFTReceivedEvent(
  guid: Bytes,
  srcEid: BigInt,
  toAddress: Address,
  tokenId: BigInt
): ONFTReceived {
  let onftReceivedEvent = changetype<ONFTReceived>(newMockEvent())

  onftReceivedEvent.parameters = new Array()

  onftReceivedEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  onftReceivedEvent.parameters.push(
    new ethereum.EventParam("srcEid", ethereum.Value.fromUnsignedBigInt(srcEid))
  )
  onftReceivedEvent.parameters.push(
    new ethereum.EventParam("toAddress", ethereum.Value.fromAddress(toAddress))
  )
  onftReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return onftReceivedEvent
}

export function createONFTSentEvent(
  guid: Bytes,
  dstEid: BigInt,
  fromAddress: Address,
  tokenId: BigInt
): ONFTSent {
  let onftSentEvent = changetype<ONFTSent>(newMockEvent())

  onftSentEvent.parameters = new Array()

  onftSentEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  onftSentEvent.parameters.push(
    new ethereum.EventParam("dstEid", ethereum.Value.fromUnsignedBigInt(dstEid))
  )
  onftSentEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  onftSentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return onftSentEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPeerSetEvent(eid: BigInt, peer: Bytes): PeerSet {
  let peerSetEvent = changetype<PeerSet>(newMockEvent())

  peerSetEvent.parameters = new Array()

  peerSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  peerSetEvent.parameters.push(
    new ethereum.EventParam("peer", ethereum.Value.fromFixedBytes(peer))
  )

  return peerSetEvent
}

export function createPreCrimeSetEvent(preCrimeAddress: Address): PreCrimeSet {
  let preCrimeSetEvent = changetype<PreCrimeSet>(newMockEvent())

  preCrimeSetEvent.parameters = new Array()

  preCrimeSetEvent.parameters.push(
    new ethereum.EventParam(
      "preCrimeAddress",
      ethereum.Value.fromAddress(preCrimeAddress)
    )
  )

  return preCrimeSetEvent
}

export function createPublicMintEvent(
  tokenId: BigInt,
  minter: Address
): PublicMint {
  let publicMintEvent = changetype<PublicMint>(newMockEvent())

  publicMintEvent.parameters = new Array()

  publicMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  publicMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return publicMintEvent
}

export function createPublicPhaseStartedEvent(): PublicPhaseStarted {
  let publicPhaseStartedEvent = changetype<PublicPhaseStarted>(newMockEvent())

  publicPhaseStartedEvent.parameters = new Array()

  return publicPhaseStartedEvent
}

export function createTokenEvolvedEvent(
  tokenId: BigInt,
  evolution: i32
): TokenEvolved {
  let tokenEvolvedEvent = changetype<TokenEvolved>(newMockEvent())

  tokenEvolvedEvent.parameters = new Array()

  tokenEvolvedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenEvolvedEvent.parameters.push(
    new ethereum.EventParam(
      "evolution",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(evolution))
    )
  )

  return tokenEvolvedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createWhitelistMintEvent(
  tokenId: BigInt,
  minter: Address
): WhitelistMint {
  let whitelistMintEvent = changetype<WhitelistMint>(newMockEvent())

  whitelistMintEvent.parameters = new Array()

  whitelistMintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  whitelistMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return whitelistMintEvent
}

export function createWhitelistPhaseStartedEvent(): WhitelistPhaseStarted {
  let whitelistPhaseStartedEvent =
    changetype<WhitelistPhaseStarted>(newMockEvent())

  whitelistPhaseStartedEvent.parameters = new Array()

  return whitelistPhaseStartedEvent
}

export function createWhitelistUpdatedEvent(
  _address: Address,
  _isWhitelisted: boolean
): WhitelistUpdated {
  let whitelistUpdatedEvent = changetype<WhitelistUpdated>(newMockEvent())

  whitelistUpdatedEvent.parameters = new Array()

  whitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  whitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_isWhitelisted",
      ethereum.Value.fromBoolean(_isWhitelisted)
    )
  )

  return whitelistUpdatedEvent
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type contract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("contract", id.toString(), this);
    }
  }

  static load(id: string): contract | null {
    return changetype<contract | null>(store.get("contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asERC721(): string | null {
    let value = this.get("asERC721");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asERC721(value: string | null) {
    if (!value) {
      this.unset("asERC721");
    } else {
      this.set("asERC721", Value.fromString(<string>value));
    }
  }
}

export class account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("account", id.toString(), this);
    }
  }

  static load(id: string): account | null {
    return changetype<account | null>(store.get("account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get transfersFrom(): Array<string> {
    let value = this.get("transfersFrom");
    return value!.toStringArray();
  }

  set transfersFrom(value: Array<string>) {
    this.set("transfersFrom", Value.fromStringArray(value));
  }

  get transfersTo(): Array<string> {
    let value = this.get("transfersTo");
    return value!.toStringArray();
  }

  set transfersTo(value: Array<string>) {
    this.set("transfersTo", Value.fromStringArray(value));
  }
}

export class collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalSales", Value.fromI32(0));
    this.set("totalVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("topSale", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type collection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("collection", id.toString(), this);
    }
  }

  static load(id: string): collection | null {
    return changetype<collection | null>(store.get("collection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get supportsMetadata(): boolean {
    let value = this.get("supportsMetadata");
    return value!.toBoolean();
  }

  set supportsMetadata(value: boolean) {
    this.set("supportsMetadata", Value.fromBoolean(value));
  }

  get totalSales(): i32 {
    let value = this.get("totalSales");
    return value!.toI32();
  }

  set totalSales(value: i32) {
    this.set("totalSales", Value.fromI32(value));
  }

  get totalVolume(): BigDecimal {
    let value = this.get("totalVolume");
    return value!.toBigDecimal();
  }

  set totalVolume(value: BigDecimal) {
    this.set("totalVolume", Value.fromBigDecimal(value));
  }

  get topSale(): BigDecimal {
    let value = this.get("topSale");
    return value!.toBigDecimal();
  }

  set topSale(value: BigDecimal) {
    this.set("topSale", Value.fromBigDecimal(value));
  }

  get dailyCollectionSnapshot(): Array<string> {
    let value = this.get("dailyCollectionSnapshot");
    return value!.toStringArray();
  }

  set dailyCollectionSnapshot(value: Array<string>) {
    this.set("dailyCollectionSnapshot", Value.fromStringArray(value));
  }

  get weeklyCollectionSnapshot(): Array<string> {
    let value = this.get("weeklyCollectionSnapshot");
    return value!.toStringArray();
  }

  set weeklyCollectionSnapshot(value: Array<string>) {
    this.set("weeklyCollectionSnapshot", Value.fromStringArray(value));
  }

  get monthlyCollectionSnapshot(): Array<string> {
    let value = this.get("monthlyCollectionSnapshot");
    return value!.toStringArray();
  }

  set monthlyCollectionSnapshot(value: Array<string>) {
    this.set("monthlyCollectionSnapshot", Value.fromStringArray(value));
  }
}

export class token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collection", Value.fromString(""));
    this.set("identifier", Value.fromBigInt(BigInt.zero()));
    this.set("lastPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("topSale", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("token", id.toString(), this);
    }
  }

  static load(id: string): token | null {
    return changetype<token | null>(store.get("token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get lastPrice(): BigDecimal {
    let value = this.get("lastPrice");
    return value!.toBigDecimal();
  }

  set lastPrice(value: BigDecimal) {
    this.set("lastPrice", Value.fromBigDecimal(value));
  }

  get topSale(): BigDecimal {
    let value = this.get("topSale");
    return value!.toBigDecimal();
  }

  set topSale(value: BigDecimal) {
    this.set("topSale", Value.fromBigDecimal(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("collection", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("transfer", id.toString(), this);
    }
  }

  static load(id: string): transfer | null {
    return changetype<transfer | null>(store.get("transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get tokenId(): string | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenId(value: string | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromString(<string>value));
    }
  }

  get senderAddress(): string | null {
    let value = this.get("senderAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set senderAddress(value: string | null) {
    if (!value) {
      this.unset("senderAddress");
    } else {
      this.set("senderAddress", Value.fromString(<string>value));
    }
  }

  get receiverAddress(): string | null {
    let value = this.get("receiverAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set receiverAddress(value: string | null) {
    if (!value) {
      this.unset("receiverAddress");
    } else {
      this.set("receiverAddress", Value.fromString(<string>value));
    }
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get matchedSale(): string | null {
    let value = this.get("matchedSale");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set matchedSale(value: string | null) {
    if (!value) {
      this.unset("matchedSale");
    } else {
      this.set("matchedSale", Value.fromString(<string>value));
    }
  }
}

export class sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save sale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type sale must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("sale", id.toString(), this);
    }
  }

  static load(id: string): sale | null {
    return changetype<sale | null>(store.get("sale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get currency(): string | null {
    let value = this.get("currency");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currency(value: string | null) {
    if (!value) {
      this.unset("currency");
    } else {
      this.set("currency", Value.fromString(<string>value));
    }
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get platform(): string | null {
    let value = this.get("platform");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set platform(value: string | null) {
    if (!value) {
      this.unset("platform");
    } else {
      this.set("platform", Value.fromString(<string>value));
    }
  }
}

export class transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("unmatchedTransferCount", Value.fromI32(0));
    this.set("transfers", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("transaction", id.toString(), this);
    }
  }

  static load(id: string): transaction | null {
    return changetype<transaction | null>(store.get("transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get unmatchedTransferCount(): i32 {
    let value = this.get("unmatchedTransferCount");
    return value!.toI32();
  }

  set unmatchedTransferCount(value: i32) {
    this.set("unmatchedTransferCount", Value.fromI32(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (!value) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class dailyCollectionSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collection", Value.fromString(""));
    this.set("dailyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("topSale", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("bottomSale", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save dailyCollectionSnapshot entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type dailyCollectionSnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("dailyCollectionSnapshot", id.toString(), this);
    }
  }

  static load(id: string): dailyCollectionSnapshot | null {
    return changetype<dailyCollectionSnapshot | null>(
      store.get("dailyCollectionSnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get dailyVolume(): BigDecimal {
    let value = this.get("dailyVolume");
    return value!.toBigDecimal();
  }

  set dailyVolume(value: BigDecimal) {
    this.set("dailyVolume", Value.fromBigDecimal(value));
  }

  get dailyTransactions(): i32 {
    let value = this.get("dailyTransactions");
    return value!.toI32();
  }

  set dailyTransactions(value: i32) {
    this.set("dailyTransactions", Value.fromI32(value));
  }

  get topSale(): BigDecimal {
    let value = this.get("topSale");
    return value!.toBigDecimal();
  }

  set topSale(value: BigDecimal) {
    this.set("topSale", Value.fromBigDecimal(value));
  }

  get bottomSale(): BigDecimal {
    let value = this.get("bottomSale");
    return value!.toBigDecimal();
  }

  set bottomSale(value: BigDecimal) {
    this.set("bottomSale", Value.fromBigDecimal(value));
  }
}

export class weeklyCollectionSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromI32(0));
    this.set("collection", Value.fromString(""));
    this.set("weeklyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("topSale", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("bottomSale", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save weeklyCollectionSnapshot entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type weeklyCollectionSnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("weeklyCollectionSnapshot", id.toString(), this);
    }
  }

  static load(id: string): weeklyCollectionSnapshot | null {
    return changetype<weeklyCollectionSnapshot | null>(
      store.get("weeklyCollectionSnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get weeklyVolume(): BigDecimal {
    let value = this.get("weeklyVolume");
    return value!.toBigDecimal();
  }

  set weeklyVolume(value: BigDecimal) {
    this.set("weeklyVolume", Value.fromBigDecimal(value));
  }

  get weeklyTransactions(): i32 {
    let value = this.get("weeklyTransactions");
    return value!.toI32();
  }

  set weeklyTransactions(value: i32) {
    this.set("weeklyTransactions", Value.fromI32(value));
  }

  get topSale(): BigDecimal {
    let value = this.get("topSale");
    return value!.toBigDecimal();
  }

  set topSale(value: BigDecimal) {
    this.set("topSale", Value.fromBigDecimal(value));
  }

  get bottomSale(): BigDecimal {
    let value = this.get("bottomSale");
    return value!.toBigDecimal();
  }

  set bottomSale(value: BigDecimal) {
    this.set("bottomSale", Value.fromBigDecimal(value));
  }
}

export class monthlyCollectionSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromI32(0));
    this.set("collection", Value.fromString(""));
    this.set("monthlyVolume", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("topSale", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("bottomSale", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save monthlyCollectionSnapshot entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type monthlyCollectionSnapshot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("monthlyCollectionSnapshot", id.toString(), this);
    }
  }

  static load(id: string): monthlyCollectionSnapshot | null {
    return changetype<monthlyCollectionSnapshot | null>(
      store.get("monthlyCollectionSnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value!.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get monthlyVolume(): BigDecimal {
    let value = this.get("monthlyVolume");
    return value!.toBigDecimal();
  }

  set monthlyVolume(value: BigDecimal) {
    this.set("monthlyVolume", Value.fromBigDecimal(value));
  }

  get monthlyTransactions(): i32 {
    let value = this.get("monthlyTransactions");
    return value!.toI32();
  }

  set monthlyTransactions(value: i32) {
    this.set("monthlyTransactions", Value.fromI32(value));
  }

  get topSale(): BigDecimal {
    let value = this.get("topSale");
    return value!.toBigDecimal();
  }

  set topSale(value: BigDecimal) {
    this.set("topSale", Value.fromBigDecimal(value));
  }

  get bottomSale(): BigDecimal {
    let value = this.get("bottomSale");
    return value!.toBigDecimal();
  }

  set bottomSale(value: BigDecimal) {
    this.set("bottomSale", Value.fromBigDecimal(value));
  }
}

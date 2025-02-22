import {Resources} from '../Resources';
import {PartyName} from '../turmoil/PartyName';
import {RequirementType} from './RequirementType';
import {Tags} from './Tags';

export interface ICardRequirement {
  type: RequirementType;
  amount: number;
  isMax: boolean;
  isAny: boolean;
}

export interface IPartyCardRequirement extends ICardRequirement {
  party: PartyName;
}

export interface IProductionCardRequirement extends ICardRequirement {
  resource: Resources;
}

export interface ITagCardRequirement extends ICardRequirement {
  tag: Tags;
}

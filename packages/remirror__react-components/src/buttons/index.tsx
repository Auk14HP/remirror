import React, { FC } from 'react';

import { CommandButton } from '../';
import { CenterAlign, CenterAlignProps } from '../commands/center-align';
import { Copy, CopyProps } from '../commands/copy';
import { CreateTable, CreateTableProps } from '../commands/create-table';
import { Cut, CutProps } from '../commands/cut';
import { DecreaseFontSize, DecreaseFontSizeProps } from '../commands/decrease-font-size';
import { DecreaseIndent, DecreaseIndentProps } from '../commands/decrease-indent';
import { IncreaseFontSize, IncreaseFontSizeProps } from '../commands/increase-font-size';
import { IncreaseIndent, IncreaseIndentProps } from '../commands/increase-indent';
import { InsertHorizontalRule, InsertHorizontalRuleProps } from '../commands/insert-horizontal-rule';
import { JustifyAlign, JustifyAlignProps } from '../commands/justify-align';
import { LeftAlign, LeftAlignProps } from '../commands/left-align';
import { Paste, PasteProps } from '../commands/paste';
import { Redo, RedoProps } from '../commands/redo';
import { RightAlign, RightAlignProps } from '../commands/right-align';
import { ToggleBlockquote, ToggleBlockquoteProps } from '../commands/toggle-blockquote';
import { ToggleBold, ToggleBoldProps } from '../commands/toggle-bold';
import { ToggleBulletList, ToggleBulletListProps } from '../commands/toggle-bullet-list';
import { ToggleCallout, ToggleCalloutProps } from '../commands/toggle-callout';
import { ToggleCodeBlock, ToggleCodeBlockProps } from '../commands/toggle-code-block';
import { ToggleCode, ToggleCodeProps } from '../commands/toggle-code';
import { ToggleColumns, ToggleColumnsProps } from '../commands/toggle-columns';
import { ToggleHeading, ToggleHeadingProps } from '../commands/toggle-heading';
import { ToggleItalic, ToggleItalicProps } from '../commands/toggle-italic';
import { ToggleOrderedList, ToggleOrderedListProps } from '../commands/toggle-ordered-list';
import { ToggleStrike, ToggleStrikeProps } from '../commands/toggle-strike';
import { ToggleSubscript, ToggleSubscriptProps } from '../commands/toggle-subscript';
import { ToggleSuperscript, ToggleSuperscriptProps } from '../commands/toggle-superscript';
import { ToggleTaskList, ToggleTaskListProps } from '../commands/toggle-task-list';
import { ToggleUnderline, ToggleUnderlineProps } from '../commands/toggle-underline';
import { ToggleWhitespace, ToggleWhitespaceProps } from '../commands/toggle-whitespace';
import { Undo, UndoProps } from '../commands/undo';

export type CenterAlignButtonProps = Omit<CenterAlignProps<typeof CommandButton>, 'as'>;

export const CenterAlignButton: FC<CenterAlignButtonProps> = (props) => {
  return <CenterAlign as={CommandButton} {...props} />;
};

export type CopyButtonProps = Omit<CopyProps<typeof CommandButton>, 'as'>;

export const CopyButton: FC<CopyButtonProps> = (props) => {
  return <Copy as={CommandButton} {...props} />;
};

export type CreateTableButtonProps = Omit<CreateTableProps<typeof CommandButton>, 'as'>;

export const CreateTableButton: FC<CreateTableButtonProps> = (props) => {
  return <CreateTable as={CommandButton} {...props} />;
};

export type CutButtonProps = Omit<CutProps<typeof CommandButton>, 'as'>;

export const CutButton: FC<CutButtonProps> = (props) => {
  return <Cut as={CommandButton} {...props} />;
};

export type DecreaseFontSizeButtonProps = Omit<DecreaseFontSizeProps<typeof CommandButton>, 'as'>;

export const DecreaseFontSizeButton: FC<DecreaseFontSizeButtonProps> = (props) => {
  return <DecreaseFontSize as={CommandButton} {...props} />;
};

export type DecreaseIndentButtonProps = Omit<DecreaseIndentProps<typeof CommandButton>, 'as'>;

export const DecreaseIndentButton: FC<DecreaseIndentButtonProps> = (props) => {
  return <DecreaseIndent as={CommandButton} {...props} />;
};

export type IncreaseFontSizeButtonProps = Omit<IncreaseFontSizeProps<typeof CommandButton>, 'as'>;

export const IncreaseFontSizeButton: FC<IncreaseFontSizeButtonProps> = (props) => {
  return <IncreaseFontSize as={CommandButton} {...props} />;
};

export type IncreaseIndentButtonProps = Omit<IncreaseIndentProps<typeof CommandButton>, 'as'>;

export const IncreaseIndentButton: FC<IncreaseIndentButtonProps> = (props) => {
  return <IncreaseIndent as={CommandButton} {...props} />;
};

export type InsertHorizontalRuleButtonProps = Omit<InsertHorizontalRuleProps<typeof CommandButton>, 'as'>;

export const InsertHorizontalRuleButton: FC<InsertHorizontalRuleButtonProps> = (props) => {
  return <InsertHorizontalRule as={CommandButton} {...props} />;
};

export type JustifyAlignButtonProps = Omit<JustifyAlignProps<typeof CommandButton>, 'as'>;

export const JustifyAlignButton: FC<JustifyAlignButtonProps> = (props) => {
  return <JustifyAlign as={CommandButton} {...props} />;
};

export type LeftAlignButtonProps = Omit<LeftAlignProps<typeof CommandButton>, 'as'>;

export const LeftAlignButton: FC<LeftAlignButtonProps> = (props) => {
  return <LeftAlign as={CommandButton} {...props} />;
};

export type PasteButtonProps = Omit<PasteProps<typeof CommandButton>, 'as'>;

export const PasteButton: FC<PasteButtonProps> = (props) => {
  return <Paste as={CommandButton} {...props} />;
};

export type RedoButtonProps = Omit<RedoProps<typeof CommandButton>, 'as'>;

export const RedoButton: FC<RedoButtonProps> = (props) => {
  return <Redo as={CommandButton} {...props} />;
};

export type RightAlignButtonProps = Omit<RightAlignProps<typeof CommandButton>, 'as'>;

export const RightAlignButton: FC<RightAlignButtonProps> = (props) => {
  return <RightAlign as={CommandButton} {...props} />;
};

export type ToggleBlockquoteButtonProps = Omit<ToggleBlockquoteProps<typeof CommandButton>, 'as'>;

export const ToggleBlockquoteButton: FC<ToggleBlockquoteButtonProps> = (props) => {
  return <ToggleBlockquote as={CommandButton} {...props} />;
};

export type ToggleBoldButtonProps = Omit<ToggleBoldProps<typeof CommandButton>, 'as'>;

export const ToggleBoldButton: FC<ToggleBoldButtonProps> = (props) => {
  return <ToggleBold as={CommandButton} {...props} />;
};

export type ToggleBulletListButtonProps = Omit<ToggleBulletListProps<typeof CommandButton>, 'as'>;

export const ToggleBulletListButton: FC<ToggleBulletListButtonProps> = (props) => {
  return <ToggleBulletList as={CommandButton} {...props} />;
};

export type ToggleCalloutButtonProps = Omit<ToggleCalloutProps<typeof CommandButton>, 'as'>;

export const ToggleCalloutButton: FC<ToggleCalloutButtonProps> = (props) => {
  return <ToggleCallout as={CommandButton} {...props} />;
};

export type ToggleCodeBlockButtonProps = Omit<ToggleCodeBlockProps<typeof CommandButton>, 'as'>;

export const ToggleCodeBlockButton: FC<ToggleCodeBlockButtonProps> = (props) => {
  return <ToggleCodeBlock as={CommandButton} {...props} />;
};

export type ToggleCodeButtonProps = Omit<ToggleCodeProps<typeof CommandButton>, 'as'>;

export const ToggleCodeButton: FC<ToggleCodeButtonProps> = (props) => {
  return <ToggleCode as={CommandButton} {...props} />;
};

export type ToggleColumnsButtonProps = Omit<ToggleColumnsProps<typeof CommandButton>, 'as'>;

export const ToggleColumnsButton: FC<ToggleColumnsButtonProps> = (props) => {
  return <ToggleColumns as={CommandButton} {...props} />;
};

export type ToggleHeadingButtonProps = Omit<ToggleHeadingProps<typeof CommandButton>, 'as'>;

export const ToggleHeadingButton: FC<ToggleHeadingButtonProps> = (props) => {
  return <ToggleHeading as={CommandButton} {...props} />;
};

export type ToggleItalicButtonProps = Omit<ToggleItalicProps<typeof CommandButton>, 'as'>;

export const ToggleItalicButton: FC<ToggleItalicButtonProps> = (props) => {
  return <ToggleItalic as={CommandButton} {...props} />;
};

export type ToggleOrderedListButtonProps = Omit<ToggleOrderedListProps<typeof CommandButton>, 'as'>;

export const ToggleOrderedListButton: FC<ToggleOrderedListButtonProps> = (props) => {
  return <ToggleOrderedList as={CommandButton} {...props} />;
};

export type ToggleStrikeButtonProps = Omit<ToggleStrikeProps<typeof CommandButton>, 'as'>;

export const ToggleStrikeButton: FC<ToggleStrikeButtonProps> = (props) => {
  return <ToggleStrike as={CommandButton} {...props} />;
};

export type ToggleSubscriptButtonProps = Omit<ToggleSubscriptProps<typeof CommandButton>, 'as'>;

export const ToggleSubscriptButton: FC<ToggleSubscriptButtonProps> = (props) => {
  return <ToggleSubscript as={CommandButton} {...props} />;
};

export type ToggleSuperscriptButtonProps = Omit<ToggleSuperscriptProps<typeof CommandButton>, 'as'>;

export const ToggleSuperscriptButton: FC<ToggleSuperscriptButtonProps> = (props) => {
  return <ToggleSuperscript as={CommandButton} {...props} />;
};

export type ToggleTaskListButtonProps = Omit<ToggleTaskListProps<typeof CommandButton>, 'as'>;

export const ToggleTaskListButton: FC<ToggleTaskListButtonProps> = (props) => {
  return <ToggleTaskList as={CommandButton} {...props} />;
};

export type ToggleUnderlineButtonProps = Omit<ToggleUnderlineProps<typeof CommandButton>, 'as'>;

export const ToggleUnderlineButton: FC<ToggleUnderlineButtonProps> = (props) => {
  return <ToggleUnderline as={CommandButton} {...props} />;
};

export type ToggleWhitespaceButtonProps = Omit<ToggleWhitespaceProps<typeof CommandButton>, 'as'>;

export const ToggleWhitespaceButton: FC<ToggleWhitespaceButtonProps> = (props) => {
  return <ToggleWhitespace as={CommandButton} {...props} />;
};

export type UndoButtonProps = Omit<UndoProps<typeof CommandButton>, 'as'>;

export const UndoButton: FC<UndoButtonProps> = (props) => {
  return <Undo as={CommandButton} {...props} />;
};
# DATA LAYER

## Data

- phoneNumber: string[] -> initial value []
- isCalling: boolean -> initial value false

## Modifications

- phoneNumber:
  - addDigit(): Add digit to end
  - emptyPhoneNumber(): Empty
- isCalling:
  - call(): set to true
  - hangUp(): set to false

# COMPONENTS

## PhoneContext

- Stores:
  - phoneNumber
  - isCalling
  - emptyPhoneNumber
  - addDigit
  - call
  - hangUp

## App

- Renders an Info component
- Renders a Display component
- Renders a Keyboard component
- Renders an Actions component

## Info

- Receives isCalling from the PhoneContext
- Shows "Calling..." when isCalling is true
- Hides "Calling..." when isCalling is false

## Display

- Receives phoneNumber from the PhoneContext
- Shows the phoneNumber

## Actions

- Receives isCalling from the PhoneContext
- Receives phoneNumber from the PhoneContext
- Receives call from the PhoneContext
- Receives hangUp from the PhoneContext
- Renders a call button (Action component) when isCalling is false
- Renders a hang up button (Action component) when isCalling is true

## Action

- Receives isActive from props
- Receives an actionOnClick from props
- Calls the actionOnClick function when the user clicks on it
- Adds the class "active" when isActive is true
- Removes the class "active" when isActive is false

## Keyboard

- Receives isCalling from PhoneContext
- Receives addDigit from PhoneContext
- Receives emptyPhoneNumber from PhoneContext
- Renders 10 numeric keys (Key component)
- Renders 1 delete key (Key component)

## Key

- Receives an actionOnClick from props
- Receives a text from props
- Receives an isBig boolean from props
- Receives an isDisabled boolean from props

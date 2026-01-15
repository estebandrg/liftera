'use client';
import React, { useState } from 'react';
import { Button, ButtonText } from '../gluestack/button';
import { VStack } from '../gluestack/vstack';
import { HStack } from '../gluestack/hstack';
import { Heading } from '../gluestack/heading';
import { Text } from '../gluestack/text';
import { Divider } from '../gluestack/divider';
import { Box } from '../gluestack/box';
import { Badge, BadgeText } from '../gluestack/badge';
import { Avatar, AvatarFallbackText, AvatarImage } from '../gluestack/avatar';
import { Input, InputField } from '../gluestack/input';
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '../gluestack/checkbox';
import { Switch } from '../gluestack/switch';
import { Alert, AlertText, AlertIcon } from '../gluestack/alert';
import { Card } from '../gluestack/card';

export function DemoShowcase() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <VStack space="2xl" className="p-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <VStack space="md" className="items-center">
        <Heading size="4xl" className="text-center">
          Gluestack UI Demo
        </Heading>
        <Text size="lg" className="text-center text-typography-500">
          Shared components between Web and Mobile
        </Text>
        <Badge action="success" variant="solid" size="md">
          <BadgeText>Monorepo Template</BadgeText>
        </Badge>
      </VStack>

      <Divider />

      {/* Buttons Section */}
      <VStack space="lg">
        <Heading size="2xl">Buttons</Heading>
        <Text className="text-typography-600">
          Different button variants and actions
        </Text>
        
        <VStack space="md">
          <HStack space="md" className="flex-wrap">
            <Button action="primary" variant="solid" size="md">
              <ButtonText>Primary</ButtonText>
            </Button>
            <Button action="secondary" variant="solid" size="md">
              <ButtonText>Secondary</ButtonText>
            </Button>
            <Button action="positive" variant="solid" size="md">
              <ButtonText>Success</ButtonText>
            </Button>
            <Button action="negative" variant="solid" size="md">
              <ButtonText>Danger</ButtonText>
            </Button>
          </HStack>

          <HStack space="md" className="flex-wrap">
            <Button action="primary" variant="outline" size="md">
              <ButtonText>Outline</ButtonText>
            </Button>
            <Button action="primary" variant="link" size="md">
              <ButtonText>Link</ButtonText>
            </Button>
          </HStack>

          <HStack space="md" className="flex-wrap">
            <Button size="xs">
              <ButtonText>XS</ButtonText>
            </Button>
            <Button size="sm">
              <ButtonText>SM</ButtonText>
            </Button>
            <Button size="md">
              <ButtonText>MD</ButtonText>
            </Button>
            <Button size="lg">
              <ButtonText>LG</ButtonText>
            </Button>
            <Button size="xl">
              <ButtonText>XL</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </VStack>

      <Divider />

      {/* Badges Section */}
      <VStack space="lg">
        <Heading size="2xl">Badges</Heading>
        <HStack space="md" className="flex-wrap">
          <Badge action="info" variant="solid">
            <BadgeText>Info</BadgeText>
          </Badge>
          <Badge action="success" variant="solid">
            <BadgeText>Success</BadgeText>
          </Badge>
          <Badge action="warning" variant="solid">
            <BadgeText>Warning</BadgeText>
          </Badge>
          <Badge action="error" variant="solid">
            <BadgeText>Error</BadgeText>
          </Badge>
          <Badge action="muted" variant="outline">
            <BadgeText>Outline</BadgeText>
          </Badge>
        </HStack>
      </VStack>

      <Divider />

      {/* Avatar Section */}
      <VStack space="lg">
        <Heading size="2xl">Avatars</Heading>
        <HStack space="md" className="items-center">
          <Avatar size="xs">
            <AvatarFallbackText>JD</AvatarFallbackText>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallbackText>AB</AvatarFallbackText>
          </Avatar>
          <Avatar size="md">
            <AvatarFallbackText>CD</AvatarFallbackText>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallbackText>EF</AvatarFallbackText>
          </Avatar>
          <Avatar size="xl">
            <AvatarFallbackText>GH</AvatarFallbackText>
          </Avatar>
        </HStack>
      </VStack>

      <Divider />

      {/* Form Controls Section */}
      <VStack space="lg">
        <Heading size="2xl">Form Controls</Heading>
        
        <VStack space="md" className="w-full max-w-md">
          <VStack space="sm">
            <Text bold>Input Field</Text>
            <Input variant="outline" size="md">
              <InputField
                placeholder="Type something here..."
                value={inputValue}
                onChangeText={setInputValue}
              />
            </Input>
            {inputValue && (
              <Text size="sm" className="text-typography-500">
                Value: {inputValue}
              </Text>
            )}
          </VStack>

          <VStack space="sm">
            <Text bold>Checkbox</Text>
            <Checkbox
              value="demo"
              isChecked={isChecked}
              onChange={setIsChecked}
              size="md"
            >
              <CheckboxIndicator>
                <CheckboxIcon />
              </CheckboxIndicator>
              <CheckboxLabel>
                I accept the terms and conditions
              </CheckboxLabel>
            </Checkbox>
            <Text size="sm" className="text-typography-500">
              Status: {isChecked ? 'Checked' : 'Unchecked'}
            </Text>
          </VStack>

          <VStack space="sm">
            <Text bold>Switch</Text>
            <HStack space="md" className="items-center">
              <Switch
                value={isSwitchEnabled}
                onValueChange={setIsSwitchEnabled}
                size="md"
              />
              <Text>
                {isSwitchEnabled ? 'Enabled' : 'Disabled'}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>

      <Divider />

      {/* Alerts Section */}
      <VStack space="lg">
        <Heading size="2xl">Alerts</Heading>
        <VStack space="md" className="w-full">
          <Alert action="info" variant="solid">
            <AlertIcon />
            <AlertText>
              This is an informative alert
            </AlertText>
          </Alert>

          <Alert action="success" variant="solid">
            <AlertIcon />
            <AlertText>
              Operation completed successfully!
            </AlertText>
          </Alert>

          <Alert action="warning" variant="solid">
            <AlertIcon />
            <AlertText>
              Warning: Review this information
            </AlertText>
          </Alert>

          <Alert action="error" variant="solid">
            <AlertIcon />
            <AlertText>
              Error: Something went wrong
            </AlertText>
          </Alert>
        </VStack>
      </VStack>

      <Divider />

      {/* Cards Section */}
      <VStack space="lg">
        <Heading size="2xl">Cards</Heading>
        <HStack space="md" className="flex-wrap">
          <Card size="md" variant="elevated" className="p-4 max-w-xs">
            <VStack space="md">
              <Heading size="lg">Card Title</Heading>
              <Text>
                This is an example of a card with content. Cards are useful for grouping related information.
              </Text>
              <Button size="sm" className="self-start">
                <ButtonText>Action</ButtonText>
              </Button>
            </VStack>
          </Card>

          <Card size="md" variant="outline" className="p-4 max-w-xs">
            <VStack space="md">
              <HStack space="md" className="items-center">
                <Avatar size="md">
                  <AvatarFallbackText>UI</AvatarFallbackText>
                </Avatar>
                <VStack>
                  <Heading size="md">User</Heading>
                  <Text size="sm" className="text-typography-500">
                    @username
                  </Text>
                </VStack>
              </HStack>
              <Text>
                Card with outline variant and profile content.
              </Text>
            </VStack>
          </Card>
        </HStack>
      </VStack>

      <Divider />

      {/* Typography Section */}
      <VStack space="lg">
        <Heading size="2xl">Typography</Heading>
        <VStack space="md">
          <Heading size="5xl" className="text-primary-400">Heading 5XL</Heading>
          <Heading size="4xl">Heading 4XL</Heading>
          <Heading size="3xl">Heading 3XL</Heading>
          <Heading size="2xl">Heading 2XL</Heading>
          <Heading size="xl">Heading XL</Heading>
          <Heading size="lg">Heading LG</Heading>
          
          <Divider className="my-2" />
          
          <Text size="2xl" className='text-foreground'>Text 2XL</Text>
          <Text size="xl">Text XL</Text>
          <Text size="lg">Text LG</Text>
          <Text size="md">Text MD (default)</Text>
          <Text size="sm">Text SM</Text>
          <Text size="xs">Text XS</Text>
          
          <Divider className="my-2" />
          
          <Text bold>Bold Text</Text>
          <Text italic>Italic Text</Text>
          <Text underline>Underlined Text</Text>
          <Text strikeThrough>Strikethrough Text</Text>
          <Text highlight>Highlighted Text</Text>
        </VStack>
      </VStack>

      <Divider />

      {/* Layout Section */}
      <VStack space="lg">
        <Heading size="2xl">Layout Components</Heading>
        
        <VStack space="md">
          <Text bold>VStack (Vertical)</Text>
          <VStack space="sm" className="bg-background-100 p-4 rounded-lg">
            <Box className="h-12 bg-primary-300 rounded" />
            <Box className="h-12 bg-primary-400 rounded" />
            <Box className="h-12 bg-primary-500 rounded" />
          </VStack>

          <Text bold>HStack (Horizontal)</Text>
          <HStack space="sm" className="bg-background-100 p-4 rounded-lg">
            <Box className="h-12 w-12 bg-success-300 rounded" />
            <Box className="h-12 w-12 bg-success-400 rounded" />
            <Box className="h-12 w-12 bg-success-500 rounded" />
          </HStack>
        </VStack>
      </VStack>

      {/* Footer */}
      <Box className="mt-8 p-6 bg-background-50 rounded-lg">
        <VStack space="md" className="items-center">
          <Heading size="lg">All these components are shared!</Heading>
          <Text className="text-center text-typography-600">
            The same code works in Next.js (Web) and Expo (Mobile)
          </Text>
          <Badge action="info" variant="solid">
            <BadgeText>@acme/ui package</BadgeText>
          </Badge>
        </VStack>
      </Box>
    </VStack>
  );
}

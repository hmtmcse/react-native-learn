import {ScrollView, View} from "react-native"
import {Text} from "@/components/ui/text"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"

export default function ComponentShowcase() {
    return (
        <ScrollView className="flex-1 bg-background p-4">

            {/* Typography */}
            <Text className="text-2xl font-bold mb-2">Typography</Text>
            <Text>Default Text</Text>
            <Text className="text-muted-foreground">Muted Text</Text>

            <Separator className="my-4"/>

            {/* Button */}
            <Text className="text-xl font-semibold mb-2">Buttons</Text>
            <View className="flex gap-2">
                <Button>
                    <Text>Default Button</Text>
                </Button>
                <Button variant="secondary">
                    <Text>Secondary</Text>
                </Button>
                <Button variant="destructive">
                    <Text>Destructive</Text>
                </Button>
            </View>

            <Separator className="my-4"/>

            {/* Input */}
            <Text className="text-xl font-semibold mb-2">Inputs</Text>
            <Input placeholder="Enter text..."/>

            <Separator className="my-4"/>

            {/* Card */}
            <Text className="text-xl font-semibold mb-2">Card</Text>
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                    <Text>This is card content</Text>
                </CardContent>
            </Card>

            <Separator className="my-4"/>

            {/* Checkbox */}
            <Text className="text-xl font-semibold mb-2">Checkbox</Text>

            <Separator className="my-4"/>

            {/* Switch */}
            <Text className="text-xl font-semibold mb-2">Switch</Text>

            <Separator className="my-4"/>

            {/* Badge */}
            <Text className="text-xl font-semibold mb-2">Badge</Text>
            <View className="flex-row gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Danger</Badge>
            </View>



        </ScrollView>
    )
}
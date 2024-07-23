"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

const AlertDialogPage = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [cardToDelete, setCardToDelete] = useState<number | null>(null)

  const handleDelete = (cardIndex:number) => {
    setCardToDelete(cardIndex)
    setShowDeleteDialog(true)
  }

  const handleConfirmDelete = () => {
    // Implement your delete logic here
    console.log(`Deleting card ${cardToDelete}`)
    setShowDeleteDialog(false)
  }

  return (
    <div className="flex h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
          <CardDescription>This is the description...</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card 1 content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" onClick={() => handleDelete(1)}>
            Delete
          </Button>
        </CardFooter>
      </Card>

      {/* ... other cards ... */}

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the card.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default AlertDialogPage

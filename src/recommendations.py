from collections import Counter

def get_club_recommendations(person, clubs, people_clubs):
    # Find the people that the person is already part of a club with
    clubmates = [p for p, c in people_clubs.items() if person in c]
    
    # Create a list to store the club recommendations
    recommendations = []
    
    # Iterate through the clubmates
    for clubmate in clubmates:
        # Iterate through the clubs the clubmate is a part of
        for club in people_clubs[clubmate]:
            # Check if the person is already a part of the club
            if club not in clubs:
                # If not, add the club to the recommendations list
                recommendations.append(club)
    
    # Count number of each recommnedation
    counter = Counter(recommendations)

    # Sort recommendations by frequency in descending order
    sorted_recommendations = sorted(recommendations, key=counter.get, reverse=True)

    # Return sorted recommendations
    return sorted_recommendations

def get_club_recs(person_clubs, person_classes, people_clubs, people_classes):

    clubmates = [p for p, c in people_clubs.items() if person in c]

    recommendations = []

    return recommendations

